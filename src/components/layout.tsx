import { ReactNode } from 'react'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="p-5 max-w-4xl mx-auto">
      <div className="absolute bg-violet-600 left-0 right-0 top-0 h-52 -z-20 rounded-b-3xl"></div>
      <header className="flex justify-between">
        <h1 className="text-2xl text-white font-medium">E-Commerce</h1>
        <div className="flex items-center gap-x-4 [&>button]:outline-none">
          <button>
            <AiOutlineShoppingCart className="w-6 h-fit fill-slate-50" />
          </button>
          <button>
            <AiOutlineHeart className="w-6 h-fit fill-slate-50" />
          </button>
        </div>
      </header>
      <div className="mt-16">{children}</div>
    </main>
  )
}
