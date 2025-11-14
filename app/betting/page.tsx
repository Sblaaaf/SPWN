import { BettingForm } from '@/components/BettingForm'
import { getUpcomingMatches } from '@/lib/data'

export default function BettingPage() {
  // Server Component : récupère les données côté serveur
  const upcomingMatches = getUpcomingMatches()
  
  return (
    <div className="py-12 max-w-2xl mx-auto">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Placer un pari
        </h1>
        <p className="text-slate-300 text-lg">
          {upcomingMatches.length} matchs disponibles
        </p>
      </div>

      {upcomingMatches.length > 0 ? (
        <BettingForm matches={upcomingMatches} />
      ) : (
        <div className="card text-center py-12">
          <p className="text-slate-400">Aucun match disponible pour parier</p>
        </div>
      )}
    </div>
  )
}
