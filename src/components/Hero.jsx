export default function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Огромный маркетплейс с лучшими ценами
            </h1>
            <p className="mt-3 text-slate-600 text-lg">
              Миллионы товаров с быстрой доставкой. Найдите то, что нужно — от одежды до электроники.
            </p>
            <div className="mt-6 flex gap-3">
              <input
                placeholder="Искать, например: наушники"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSearch?.(e.target.value)
                }}
                className="flex-1 rounded-lg border border-slate-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 text-slate-800"
              />
              <button onClick={() => onSearch?.('скидки')} className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                Смотреть акции
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-xl"/>
            <img alt="hero" className="absolute -right-6 -bottom-6 w-40 opacity-10" src="/flame-icon.svg"/>
          </div>
        </div>
      </div>
    </section>
  )
}
