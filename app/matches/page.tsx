import { pb } from '@/lib/pocketbase'

export default async function MatchesPage() {
  // Lecture live depuis PocketBase
  const res = await pb.collection('matches').getFullList({
    expand: 'game_id,team1_id,team2_id',
    sort: '-match_date'
  });

  return (
    <div className="py-12 space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Tous les matchs PocketBase</h1>
      <div className="space-y-6">
        {res.map((match: any) => (
          <div key={match.id} className="card">
            <div className="font-semibold">{match.expand.team1_id?.name} vs {match.expand.team2_id?.name}</div>
            <div className="text-slate-400 text-sm">{match.expand.game_id?.name}</div>
            <div className="text-xs text-blue-400">
              {match.match_date} • {match.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
