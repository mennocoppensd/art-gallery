import Link from 'next/link'
import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Menno Coppens d'Eeckenbrugge",
  description: 'A gallery of artworks by a specific painter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <head>
        {/* Link naar de favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link href="/" className="font-bold text-xl text-gray-800">Menno Coppens d'Eeckenbrugge</Link>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-800 hover:text-gray-600">Gallery</Link>
              <Link href="/about" className="text-gray-800 hover:text-gray-600">About</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 mt-8">
          <div className="container mx-auto px-6 py-3 text-center text-gray-600">
            © 2024 Menno Coppens d'Eeckenbrugge. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}