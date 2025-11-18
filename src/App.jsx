import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductCard from './components/ProductCard'

function App() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [allProducts, setAllProducts] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const [catsRes, prodRes] = await Promise.all([
          fetch(`${baseUrl}/api/categories`),
          fetch(`${baseUrl}/api/products?limit=60`),
        ])
        const [cats, prods] = await Promise.all([catsRes.json(), prodRes.json()])
        setCategories(cats)
        setAllProducts(prods)
      } catch (e) {
        console.error('Failed to load', e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [baseUrl])

  const filtered = useMemo(() => {
    let items = [...allProducts]
    if (activeCategory) {
      items = items.filter((p) => p.category === activeCategory)
    }
    if (query) {
      const q = query.toLowerCase()
      items = items.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q) ||
        (p.brand || '').toLowerCase().includes(q)
      )
    }
    return items
  }, [allProducts, activeCategory, query])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar onSearch={setQuery} />
      <Hero onSearch={setQuery} />
      <Categories items={categories} active={activeCategory} onSelect={setActiveCategory} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-900">Товары</h2>
          <div className="text-sm text-slate-500">{filtered.length} найдено</div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-[340px] bg-white rounded-xl border border-slate-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} item={p} />
            ))}
          </div>
        )}
      </section>

      <footer className="border-t border-slate-200 py-10 text-center text-slate-500">
        © {new Date().getFullYear()} Vibe Market. Все права защищены.
      </footer>
    </div>
  )
}

export default App
