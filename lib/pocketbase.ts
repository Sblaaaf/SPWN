import PocketBase from 'pocketbase'

// URL .env.local
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090')
pb.autoCancellation(false)

export { pb }