import { NextResponse } from 'next/server'
import { getAllMatchesWithDetails, getMatchesByStatus } from '@/lib/data'

// GET /api/matches?status=scheduled
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    
    // Filtre par statut si fourni
    const matches = status 
      ? getMatchesByStatus(status as any)
      : getAllMatchesWithDetails()
    
    return NextResponse.json({
      success: true,
      data: matches,
      count: matches.length,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch matches' },
      { status: 500 }
    )
  }
}
