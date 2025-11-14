export default function MatchesPage() {
  return (
    <div className="py-12 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Matchs à venir
        </h1>
        <p className="text-slate-300 text-lg">
          Tous les matchs e-sport disponibles pour parier
        </p>
      </div>

      <div className="space-y-6">
        {/* Match Card - Mockée pour l'instant */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <div className="text-sm text-slate-400 mb-2">CS2 • Finale</div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <span className="font-semibold text-lg">Team Vitality</span>
                <span className="text-slate-500">vs</span>
                <span className="font-semibold text-lg">FaZe Clan</span>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">Cote</div>
                <div className="text-xl font-bold text-blue-400">2.1</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">Cote</div>
                <div className="text-xl font-bold text-purple-400">1.8</div>
              </div>
              <button className="btn-primary ml-4">
                Parier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
