import Link from 'next/link'
import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Artist Gallery | Menno Coppens d'Eeckenbrugge",
  description: 'A gallery of artworks by Menno Coppens d\'Eeckenbrugge.',
  keywords: ['artist', 'gallery', 'contemporary art', 'paintings', 'Menno Coppens d\'Eeckenbrugge'],
  authors: [{ name: 'Menno Coppens d\'Eeckenbrugge' }],
  creator: 'Menno Coppens d\'Eeckenbrugge',
  publisher: 'Menno Coppens d\'Eeckenbrugge',
  openGraph: {
    title: 'Artist Gallery | Menno Coppens d\'Eeckenbrugge',
    description: 'A gallery of artworks by Menno Coppens d\'Eeckenbrugge.',
    url: 'https://www.mennocd.com',
    siteName: 'Artist Gallery',
    images: [
      {
        url: 'https://www.yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artist Gallery | Menno Coppens d\'Eeckenbrugge',
    description: 'A gallery of artworks by Menno Coppens d\'Eeckenbrugge.',
    creator: '@mennocoppensdeeckenbrugge',
    images: ['https://www.mennocd.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  verification: {
    google: '<meta name="google-site-verification" content="t_K98zBL2EJbhOCdD-TRKrm46hif5ayOt20M6Zkw0vA" />',
    yandex: '<meta name="yandex-verification" content="141389f3c8399a8a" />',
    other: {
      me: ['mennocd.com', 'mailto:meinardvaneikenbrug@gmail.com'],
    },
  },
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
            <Link href="/" className="font-bold text-xl text-gray-800">Menno Coppens d&apos;Eeckenbrugge</Link>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-800 hover:text-gray-600">Gallery</Link>
              <Link href="/about" className="text-gray-800 hover:text-gray-600">About</Link>
              <Link href="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 mt-8">
          <div className="container mx-auto px-6 py-3 text-center text-gray-600">
            © 2024 Menno Coppens d&apos;Eeckenbrugge. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}