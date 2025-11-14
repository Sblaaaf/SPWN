import { NextResponse } from 'next/server'
import { bets } from '@/lib/data'
import { Bet } from '@/lib/types'

// GET /api/bets
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: bets,
      count: bets.length,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bets' },
      { status: 500 }
    )
  }
}

// POST /api/bets
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validation basique
    const { user_id, match_id, team_id, amount, odds } = body
    
    if (!user_id || !match_id || !team_id || !amount || !odds) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    if (amount <= 0) {
      return NextResponse.json(
        { success: false, error: 'Amount must be greater than 0' },
        { status: 400 }
      )
    }
    
    // Création du pari
    const newBet: Bet = {
      id: `bet_${Date.now()}`,
      user_id,
      match_id,
      team_id,
      amount: parseFloat(amount),
      odds: parseFloat(odds),
      potential_payout: parseFloat(amount) * parseFloat(odds),
      status: 'pending',
      placed_at: new Date(),
    }
    
    // Simulation : on ajoute au tableau (en prod, ça serait en BDD)
    bets.push(newBet)
    
    return NextResponse.json({
      success: true,
      data: newBet,
      message: 'Bet placed successfully',
    }, { status: 201 })
    
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create bet' },
      { status: 500 }
    )
  }
}
