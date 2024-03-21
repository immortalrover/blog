import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
	// sort posts and remove draft posts
  const sortedPosts = sortPosts(allBlogs.filter((post) => post.status === 'published'))
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
