export default function AdminPage() {
  return (
    <div className="py-12 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Administration
        </h1>
        <p className="text-slate-300 text-lg">
          Gérer les matchs, équipes et paris
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Statistiques</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-300">Total matchs</span>
              <span className="font-bold">42</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">Paris actifs</span>
              <span className="font-bold">1.2K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300">Utilisateurs</span>
              <span className="font-bold">856</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Actions rapides</h3>
          <div className="space-y-3">
            <button className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 transition-colors text-left">
              + Ajouter un match
            </button>
            <button className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 transition-colors text-left">
              + Ajouter une équipe
            </button>
            <button className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 transition-colors text-left">
              📊 Voir les rapports
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
