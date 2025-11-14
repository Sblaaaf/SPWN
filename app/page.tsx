export default function HomePage() {
  return (
    <div className="py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SPWN
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
            La plateforme de paris sur les compétitions e-sport les plus excitantes
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary">
            Commencer à parier
          </button>
          <button className="border border-slate-600 hover:border-slate-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Voir les matchs
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">42</div>
          <div className="text-slate-300">Matchs actifs</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">1.2K</div>
          <div className="text-slate-300">Paris placés</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-pink-400 mb-2">€25K</div>
          <div className="text-slate-300">En jeu</div>
        </div>
      </section>

      {/* Games Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Jeux disponibles</h2>
          <p className="text-slate-300">Pariez sur vos jeux e-sport préférés</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['CS2', 'League of Legends', 'Valorant', 'Rocket League'].map((game) => (
            <div key={game} className="card hover:scale-105 transform transition-all cursor-pointer">
              <div className="h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-300">{game.charAt(0)}</span>
              </div>
              <h3 className="font-semibold text-center">{game}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
