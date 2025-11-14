import { Game, Team, Match, Tournament, User, Bet, MatchWithDetails, MatchOdds } from './types'

// ===== GAMES (extrait de ton SQL) =====
export const games: Game[] = [
  { id: 'game_lol', name: 'League of Legends', category: 'MOBA', created_at: new Date() },
  { id: 'game_cs2', name: 'Counter-Strike 2', category: 'FPS', created_at: new Date() },
  { id: 'game_valorant', name: 'Valorant', category: 'FPS', created_at: new Date() },
  { id: 'game_rl', name: 'Rocket League', category: 'Sports', created_at: new Date() },
]

// ===== TEAMS (extrait de ton SQL - équipes françaises) =====
export const teams: Team[] = [
  { id: 'team_vit', name: 'Team Vitality', tag: 'VIT', country: 'FR', founded_year: 2013, total_earnings: 2500000, created_at: new Date() },
  { id: 'team_kc', name: 'Karmine Corp', tag: 'KC', country: 'FR', founded_year: 2020, total_earnings: 800000, created_at: new Date() },
  { id: 'team_ldlc', name: 'Team LDLC', tag: 'LDLC', country: 'FR', founded_year: 2010, total_earnings: 1200000, created_at: new Date() },
  { id: 'team_bds', name: 'Team BDS', tag: 'BDS', country: 'FR', founded_year: 2018, total_earnings: 900000, created_at: new Date() },
  { id: 'team_sly', name: 'Team Solary', tag: 'SLY', country: 'FR', founded_year: 2017, total_earnings: 450000, created_at: new Date() },
  { id: 'team_gm', name: 'Gentle Mates', tag: 'GM', country: 'FR', founded_year: 2021, total_earnings: 300000, created_at: new Date() },
]

// ===== TOURNAMENTS (extrait de ton SQL) =====
export const tournaments: Tournament[] = [
  { id: 'tour_blast2024', name: 'BLAST Premier Fall 2024', game_id: 'game_cs2', prize_pool: 425000, start_date: new Date('2024-10-01'), end_date: new Date('2024-12-16'), location: 'Copenhagen, Denmark', status: 'ongoing' },
  { id: 'tour_vct2024', name: 'VCT Champions 2025', game_id: 'game_valorant', prize_pool: 500000, start_date: new Date('2025-03-14'), end_date: new Date('2025-03-24'), location: 'Madrid, Spain', status: 'upcoming' },
  { id: 'tour_rlcs2024', name: 'RLCS Winter Cup 2025', game_id: 'game_rl', prize_pool: 100000, start_date: new Date('2024-12-01'), end_date: new Date('2024-12-15'), location: 'Los Angeles, USA', status: 'upcoming' },
]

// ===== MATCHES (extrait de ton SQL + nouveaux matchs) =====
export const matches: Match[] = [
  {
    id: 'match_vit_kc',
    tournament_id: 'tour_blast2024',
    team1_id: 'team_vit',
    team2_id: 'team_kc',
    game_id: 'game_cs2',
    match_date: new Date('2025-10-25T18:00:00'),
    status: 'scheduled',
    team1_score: 0,
    team2_score: 0,
    format: 'Bo3',
    created_at: new Date(),
  },
  {
    id: 'match_bds_sly',
    tournament_id: 'tour_rlcs2024',
    team1_id: 'team_bds',
    team2_id: 'team_sly',
    game_id: 'game_rl',
    match_date: new Date('2025-10-26T20:00:00'),
    status: 'scheduled',
    team1_score: 0,
    team2_score: 0,
    format: 'Bo5',
    created_at: new Date(),
  },
  {
    id: 'match_kc_ldlc',
    tournament_id: 'tour_vct2024',
    team1_id: 'team_kc',
    team2_id: 'team_ldlc',
    game_id: 'game_valorant',
    match_date: new Date('2025-10-24T19:00:00'),
    status: 'live',
    team1_score: 1,
    team2_score: 0,
    format: 'Bo3',
    created_at: new Date(),
  },
  {
    id: 'match_vit_bds',
    tournament_id: 'tour_blast2024',
    team1_id: 'team_vit',
    team2_id: 'team_bds',
    game_id: 'game_cs2',
    match_date: new Date('2025-10-23T16:00:00'),
    status: 'completed',
    team1_score: 2,
    team2_score: 1,
    winner_id: 'team_vit',
    format: 'Bo3',
    created_at: new Date(),
  },
]

// ===== MATCH ODDS =====
export const matchOdds: MatchOdds[] = [
  { id: 'odds_1', match_id: 'match_vit_kc', team_id: 'team_vit', odds: 1.85, created_at: new Date(), updated_at: new Date() },
  { id: 'odds_2', match_id: 'match_vit_kc', team_id: 'team_kc', odds: 2.10, created_at: new Date(), updated_at: new Date() },
  { id: 'odds_3', match_id: 'match_bds_sly', team_id: 'team_bds', odds: 1.70, created_at: new Date(), updated_at: new Date() },
  { id: 'odds_4', match_id: 'match_bds_sly', team_id: 'team_sly', odds: 2.40, created_at: new Date(), updated_at: new Date() },
]

// ===== USERS =====
export const users: User[] = [
  { id: 'user_1', username: 'bet_master_fr', email: 'betmaster@example.com', balance: 500, total_bet: 1200, total_won: 800, created_at: new Date() },
  { id: 'user_2', username: 'esport_fan_69', email: 'esportfan@example.com', balance: 250, total_bet: 800, total_won: 920, created_at: new Date() },
]

// ===== BETS =====
export const bets: Bet[] = [
  { id: 'bet_1', user_id: 'user_1', match_id: 'match_vit_kc', team_id: 'team_vit', amount: 50, odds: 1.85, potential_payout: 92.5, status: 'pending', placed_at: new Date() },
]

// ===== HELPERS =====

export function getMatchWithDetails(matchId: string): MatchWithDetails | null {
  const match = matches.find(m => m.id === matchId)
  if (!match) return null

  const game = games.find(g => g.id === match.game_id)
  const team1 = teams.find(t => t.id === match.team1_id)
  const team2 = teams.find(t => t.id === match.team2_id)
  const tournament = tournaments.find(t => t.id === match.tournament_id)
  const odds = matchOdds.filter(o => o.match_id === matchId)

  if (!game || !team1 || !team2 || !tournament) return null

  return { ...match, game, team1, team2, tournament, odds }
}

export function getAllMatchesWithDetails(): MatchWithDetails[] {
  return matches
    .map(match => getMatchWithDetails(match.id))
    .filter((m): m is MatchWithDetails => m !== null)
}

export function getMatchesByStatus(status: Match['status']): MatchWithDetails[] {
  return getAllMatchesWithDetails().filter(m => m.status === status)
}

export function getUpcomingMatches(limit?: number): MatchWithDetails[] {
  const upcoming = getMatchesByStatus('scheduled')
    .sort((a, b) => a.match_date.getTime() - b.match_date.getTime())
  
  return limit ? upcoming.slice(0, limit) : upcoming
}

export function getGlobalStats() {
  return {
    totalMatches: matches.length,
    scheduledMatches: matches.filter(m => m.status === 'scheduled').length,
    liveMatches: matches.filter(m => m.status === 'live').length,
    totalBets: bets.length,
    activeBets: bets.filter(b => b.status === 'pending').length,
    totalUsers: users.length,
    totalTeams: teams.length,
  }
}

// Helper pour récupérer les cotes d'un match
export function getMatchOdds(matchId: string): MatchOdds[] {
  return matchOdds.filter(o => o.match_id === matchId)
}
