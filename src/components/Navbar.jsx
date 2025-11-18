import { useState } from 'react'
import { Search, ShoppingCart, Heart, Menu } from 'lucide-react'

export default function Navbar({ onSearch, cartCount = 0, favoritesCount = 0 }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg md:hidden hover:bg-slate-100">
            <Menu className="w-6 h-6 text-slate-700" />
          </button>

          <a href="/" className="flex items-center gap-2">
            <span className="inline-flex w-9 h-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white items-center justify-center font-black">
              WB
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-900">Vibe Market</span>
          </a>

          <form onSubmit={handleSubmit} className="flex-1 hidden md:flex">
            <div className="flex-1 relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск товаров"
                className="w-full rounded-l-lg border border-slate-200 bg-white/80 px-4 py-2.5 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 text-slate-800"
              />
            </div>
            <button type="submit" className="px-4 rounded-r-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </form>

          <div className="flex items-center gap-2 ml-auto">
            <button className="relative p-2 rounded-lg hover:bg-slate-100">
              <Heart className="w-6 h-6 text-slate-700" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[11px] px-1.5 rounded-full bg-rose-500 text-white">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button className="relative p-2 rounded-lg hover:bg-slate-100">
              <ShoppingCart className="w-6 h-6 text-slate-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[11px] px-1.5 rounded-full bg-purple-600 text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:hidden mt-3">
          <div className="flex">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск товаров"
              className="w-full rounded-l-lg border border-slate-200 bg-white/80 px-4 py-2.5 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 text-slate-800"
            />
            <button type="submit" className="px-4 rounded-r-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </header>
  )
}
