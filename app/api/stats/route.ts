import { NextResponse } from 'next/server'
import { getGlobalStats } from '@/lib/data'

// GET /api/stats
export async function GET() {
  try {
    const stats = getGlobalStats()
    
    return NextResponse.json({
      success: true,
      data: stats,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
