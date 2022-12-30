import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const Header = dynamic(() => import('./header'), {
  ssr: false
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="p-5 max-w-4xl mx-auto font-primary">
      <div className="absolute bg-violet-600 left-0 right-0 top-0 h-52 -z-20 rounded-b-2xl"></div>
      <Header />
      <div className="mt-14">{children}</div>
    </main>
  )
}
