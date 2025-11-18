import { Star } from 'lucide-react'

export default function ProductCard({ item }) {
  const price = item.price
  const hasDiscount = item.discount_percent > 0
  const oldPrice = hasDiscount ? Math.round(price / (1 - item.discount_percent / 100)) : null

  return (
    <a href="#" className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        {item.images?.[0] ? (
          <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        ) : (
          <div className="w-full h-full" />
        )}
        {hasDiscount && (
          <span className="absolute top-2 left-2 text-[11px] bg-rose-500 text-white px-2 py-1 rounded-full">
            -{item.discount_percent}%
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="text-sm text-slate-500">{item.brand || item.category}</div>
        <div className="font-medium text-slate-900 line-clamp-2 min-h-[40px]">{item.title}</div>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < Math.round(item.rating) ? 'fill-current' : ''}`} />
          ))}
          <span className="ml-1 text-xs text-slate-500">{item.reviews_count}</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <div className="text-lg font-bold text-slate-900">{price.toLocaleString()} ₽</div>
          {oldPrice && <div className="text-sm line-through text-slate-400">{oldPrice.toLocaleString()} ₽</div>}
        </div>
        <button className="mt-3 w-full py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">В корзину</button>
      </div>
    </a>
  )
}
