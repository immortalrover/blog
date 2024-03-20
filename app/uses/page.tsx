import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
// import PostSimple from '@/layouts/PostSimple'
// import PostLayout from '@/layouts/PostLayout'
// import PostBanner from '@/layouts/PostBanner'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Uses' })
// const defaultLayout = 'PostLayout'
// const layouts = {
// 	PostSimple,
// 	PostLayout,
// 	PostBanner,
// }

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'uses') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
