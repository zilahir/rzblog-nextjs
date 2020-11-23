import Head from 'next/head'
import { getAllPostsForHome } from '../src/api/api'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import { Layout } from '@/components/common/Layout'

export default function Home({ allPosts }) {
  return (
    <Layout>
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
    </Layout>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts, preview },
  }
}
