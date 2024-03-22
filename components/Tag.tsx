import Link from 'next/link'
import { slug } from 'github-slugger'

// Tag: set the tags in the posts title

interface Props {
  text: string
}

export default function Tag({ text }: Props) {
  return (
		// uppercase all tags and set them pink.
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

