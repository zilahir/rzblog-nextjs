import Head from 'next/head'
import { getAllPostsForHome } from '../src/api/api'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home({ allPosts }) {
  return (
    <div className={styles.container}>
      {
        allPosts.length > 0 && (
          allPosts.map(thisPost => (
            <Link as={`/posts/${thisPost.slug}`} href={'/posts/[slug]'}>
              {thisPost.title}
            </Link>
          ))
        )
      }
    </div>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts, preview },
  }
}
