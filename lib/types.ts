// ===== TYPES BASÉS SUR LE SCHÉMA SQL =====
// data_esport_betting_sqlite.sql

export type Game = {
  id: string
  name: string
  category: string
  created_at: Date
}

export type Team = {
  id: string
  name: string
  tag: string
  country: string
  logo_url?: string
  founded_year?: number
  total_earnings: number
  created_at: Date
}

export type Player = {
  id: string
  username: string
  real_name?: string
  country: string
  age?: number
  role?: string
  avatar_url?: string
  total_earnings: number
  twitch_followers: number
  youtube_subscribers: number
  created_at: Date
}

export type TeamPlayer = {
  id: string
  team_id: string
  player_id: string
  position?: string
  join_date: Date
  salary?: number
  is_active: boolean
}

export type Tournament = {
  id: string
  name: string
  game_id: string
  prize_pool?: number
  start_date?: Date
  end_date?: Date
  location?: string
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
}

export type Match = {
  id: string
  tournament_id: string
  team1_id: string
  team2_id: string
  game_id: string
  match_date: Date
  status: 'scheduled' | 'live' | 'completed' | 'cancelled'
  team1_score: number
  team2_score: number
  winner_id?: string
  format: string // "Bo3", "Bo5", "Bo1"
  created_at: Date
}

export type User = {
  id: string
  username: string
  email: string
  password_hash?: string
  balance: number
  total_bet: number
  total_won: number
  created_at: Date
}

export type Bet = {
  id: string
  user_id: string
  match_id: string
  team_id: string
  amount: number
  odds: number
  potential_payout: number
  status: 'pending' | 'won' | 'lost' | 'cancelled'
  placed_at: Date
}

export type MatchOdds = {
  id: string
  match_id: string
  team_id: string
  odds: number
  created_at: Date
  updated_at: Date
}

// ===== TYPES ENRICHIS (avec relations) =====

export type MatchWithDetails = Match & {
  game: Game
  team1: Team
  team2: Team
  tournament: Tournament
  odds?: MatchOdds[]
}

export type BetWithDetails = Bet & {
  match: MatchWithDetails
  team: Team
  user: User
}
