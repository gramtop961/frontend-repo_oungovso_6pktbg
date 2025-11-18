export default function Categories({ items = [], active, onSelect }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <div className="flex gap-2 overflow-x-auto hide-scrollbar py-1">
        {items.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect?.(c.name)}
            className={`px-3 py-2 rounded-full border text-sm whitespace-nowrap transition-colors ${
              active === c.name
                ? 'bg-purple-600 text-white border-purple-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  )
}
