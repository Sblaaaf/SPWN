'use client'

import { useState } from 'react'
import { Match, Team, MatchOdds } from '@/lib/types'

type BettingFormProps = {
  matches: Array<{
    id: string
    team1: Team
    team2: Team
    game: { name: string }
    tournament: { name: string }
    odds: MatchOdds[]
  }>
}

export function BettingForm({ matches }: BettingFormProps) {
  const [selectedMatchId, setSelectedMatchId] = useState(matches[0]?.id || '')
  const [selectedTeamId, setSelectedTeamId] = useState('')
  const [amount, setAmount] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [betHistory, setBetHistory] = useState<Array<{
    id: string
    matchName: string
    teamName: string
    amount: number
    odds: number
    potentialWin: number
  }>>([])

  const selectedMatch = matches.find(m => m.id === selectedMatchId)
  const selectedOdds = selectedMatch?.odds.find(o => o.team_id === selectedTeamId)
  const potentialWin = selectedOdds && amount ? parseFloat(amount) * selectedOdds.odds : 0

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  if (!selectedMatchId || !selectedTeamId || !amount || parseFloat(amount) <= 0) {
    alert('⚠️ Veuillez remplir tous les champs correctement')
    return
  }

  setIsSubmitting(true)
  
  try {
    // Appel à l'API
    const response = await fetch('/api/bets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 'user_1', // En dur pour l'instant (avant auth)
        match_id: selectedMatchId,
        team_id: selectedTeamId,
        amount: parseFloat(amount),
        odds: selectedOdds?.odds || 0,
      }),
    })
    
    const result = await response.json()
    
    if (!result.success) {
      alert(`❌ Erreur: ${result.error}`)
      setIsSubmitting(false)
      return
    }
    
    // Ajout à l'historique local
    const team = selectedMatch?.team1.id === selectedTeamId ? selectedMatch.team1 : selectedMatch?.team2
    
    setBetHistory(prev => [{
      id: result.data.id,
      matchName: `${selectedMatch?.team1.name} vs ${selectedMatch?.team2.name}`,
      teamName: team?.name || '',
      amount: parseFloat(amount),
      odds: selectedOdds?.odds || 0,
      potentialWin: potentialWin,
    }, ...prev])
    
    // Reset
    setAmount('')
    setSelectedTeamId('')
    setIsSubmitting(false)
    
    alert('✅ Pari placé avec succès !')
    
  } catch (error) {
    console.error('Error placing bet:', error)
    alert('❌ Erreur lors du placement du pari')
    setIsSubmitting(false)
  }
}

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="card space-y-6">
        <h2 className="text-2xl font-bold">Nouveau pari</h2>

        {/* Sélection du match */}
        <div>
          <label className="block text-sm font-medium mb-2">Match</label>
          <select 
            value={selectedMatchId}
            onChange={(e) => {
              setSelectedMatchId(e.target.value)
              setSelectedTeamId('')
            }}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {matches.map((match) => (
              <option key={match.id} value={match.id}>
                {match.team1.name} vs {match.team2.name} ({match.game.name})
              </option>
            ))}
          </select>
        </div>

        {/* Sélection de l'équipe */}
        {selectedMatch && (
          <div>
            <label className="block text-sm font-medium mb-2">Équipe favorite</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSelectedTeamId(selectedMatch.team1.id)}
                className={`rounded-lg px-6 py-4 font-semibold transition-all ${
                  selectedTeamId === selectedMatch.team1.id
                    ? 'bg-blue-600 border-2 border-blue-400'
                    : 'bg-slate-900 border border-slate-700 hover:border-slate-600'
                }`}
              >
                {selectedMatch.team1.name}
                <div className="text-sm text-slate-400 mt-1">
                  Cote: {selectedMatch.odds.find(o => o.team_id === selectedMatch.team1.id)?.odds.toFixed(2) || 'N/A'}
                </div>
              </button>
              
              <button
                type="button"
                onClick={() => setSelectedTeamId(selectedMatch.team2.id)}
                className={`rounded-lg px-6 py-4 font-semibold transition-all ${
                  selectedTeamId === selectedMatch.team2.id
                    ? 'bg-blue-600 border-2 border-blue-400'
                    : 'bg-slate-900 border border-slate-700 hover:border-slate-600'
                }`}
              >
                {selectedMatch.team2.name}
                <div className="text-sm text-slate-400 mt-1">
                  Cote: {selectedMatch.odds.find(o => o.team_id === selectedMatch.team2.id)?.odds.toFixed(2) || 'N/A'}
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Montant */}
        <div>
          <label className="block text-sm font-medium mb-2">Montant (€)</label>
          <input 
            type="number" 
            min="1"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="10.00" 
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {potentialWin > 0 && (
            <div className="text-sm text-slate-400 mt-2">
              Gain potentiel: <span className="text-blue-400 font-semibold">€{potentialWin.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Bouton submit */}
        <button 
          type="submit"
          disabled={isSubmitting || !selectedTeamId || !amount}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Traitement...' : 'Confirmer le pari'}
        </button>
      </form>

      {/* Historique des paris */}
      {betHistory.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Historique (session en cours)</h2>
          <div className="space-y-3">
            {betHistory.map((bet) => (
              <div key={bet.id} className="card">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold">{bet.matchName}</div>
                    <div className="text-sm text-slate-400">
                      Pari sur <span className="text-blue-400">{bet.teamName}</span> • Cote: {bet.odds.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">€{bet.amount.toFixed(2)}</div>
                    <div className="text-sm text-green-400">+€{bet.potentialWin.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-xs text-slate-500 text-center">
            💡 Les paris sont stockés en mémoire et disparaîtront au rechargement
          </div>
        </div>
      )}
    </div>
  )
}
