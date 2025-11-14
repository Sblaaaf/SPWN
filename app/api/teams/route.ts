import { NextResponse } from 'next/server'
import { teams } from '@/lib/data'

// GET /api/teams
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: teams,
      count: teams.length,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch teams' },
      { status: 500 }
    )
  }
}
