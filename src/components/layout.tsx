import Link from 'next/link'
import { ReactNode } from 'react'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="p-5 max-w-4xl mx-auto font-primary">
      <div className="absolute bg-violet-600 left-0 right-0 top-0 h-52 -z-20 rounded-b-2xl"></div>
      <header className="flex justify-between">
        <h1 className="text-2xl text-white font-medium">E-Commerce</h1>
        <div className="flex items-center gap-x-4 [&>button]:outline-none">
          <Link href={'/'}>
            <a>
              <AiOutlineShoppingCart className="w-6 h-fit fill-slate-50" />
            </a>
          </Link>
          <Link href={'/'}>
            <a>
              <AiOutlineHeart className="w-6 h-fit fill-slate-50" />
            </a>
          </Link>
        </div>
      </header>
      <div className="mt-14">{children}</div>
    </main>
  )
}
