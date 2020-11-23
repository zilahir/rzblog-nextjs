async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error(`Failed to fetch API ${json.errors}`)
  }

  return json.data
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    blogposts(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  )
  return data?.blogposts[0]
}

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      blogposts {
        slug
      }
    }
  `)
  return data?.allPosts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query Posts($where: JSON){
      blogposts(sort: "date:desc", limit: 10, where: $where) {
        title
        slug
        category
        content
        media {id, url}
        date
        status
        coverImage {
          url
        }
      }
    }
  `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: true }),
        },
      },
    }
  )
  return data?.blogposts
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    blogposts(where: $where) {
      title
      slug
      content
      date
      status
      ogImage: coverImage{
        url
      }
      coverImage {
        url
      }
    }

    morePosts: blogposts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      status
      date
      coverImage {
        url
      }
    }
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug,
          ...(preview ? {} : { status: true }),
        },
        where_ne: {
          ...(preview ? {} : { status: true }),
          slug_ne: slug,
        },
      },
    }
  )
  return data
}
