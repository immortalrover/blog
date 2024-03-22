import { ReactNode } from 'react'

// PageTitle: a title component for PostSimple, PostLayout, PostBanner layouts.
// Here you can DIY the title 
interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
