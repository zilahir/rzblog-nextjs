import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../src/api/api'
import markdownToHtml from '@/lib/markdownToHtml'
import { Article } from '@/components/Article'

export default function Post({post}) {
	const router = useRouter()
	if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
	}
	console.debug('content', post)
	return (
		<Article post={post} />
	)
}

export async function getStaticProps({ params, preview = null }) {
	const data = await getPostAndMorePosts(params.slug, preview)
	const content = await markdownToHtml(data?.blogposts[0]?.content || '')

	return {
		props: {
			preview,
			post: {
				...data?.blogposts[0],
				content,
			},
			morePosts: data?.morePosts,
		},
	}
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug()
	return {
		paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
		fallback: true,
	}
}