import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SPWN - Paris E-Sports',
  description: 'Plateforme de paris sur les compétitions e-sport',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white`}>
        <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              SPWN
            </Link>
            <div className="hidden md:flex space-x-6 text-sm">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Accueil
              </Link>
              <Link href="/matches" className="hover:text-blue-400 transition-colors">
                Matchs
              </Link>
              <Link href="/betting" className="hover:text-blue-400 transition-colors">
                Parier
              </Link>
              <Link href="/admin" className="hover:text-blue-400 transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
