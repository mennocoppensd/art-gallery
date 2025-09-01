import './styles/globals.css'
import { Inter, Poppins } from 'next/font/google'
import Navigation from '../components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata = {
  title: "Artist Portfolio | Menno Coppens d'Eeckenbrugge",
  description: 'A portfolio of artworks by Menno Coppens d\'Eeckenbrugge.',
  keywords: ['artist', 'portfolio', 'contemporary art', 'paintings', 'Menno Coppens d\'Eeckenbrugge'],
  authors: [{ name: 'Menno Coppens d\'Eeckenbrugge' }],
  creator: 'Menno Coppens d\'Eeckenbrugge',
  publisher: 'Menno Coppens d\'Eeckenbrugge',
  openGraph: {
    title: 'Artist | Menno Coppens d\'Eeckenbrugge',
    description: 'A portfolio of artworks by Menno Coppens d\'Eeckenbrugge.',
    url: 'https://www.mennocd.com',
    siteName: 'Artist',
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
    title: 'Artist Portfolio | Menno Coppens d\'Eeckenbrugge',
    description: 'A portfolio of artworks by Menno Coppens d\'Eeckenbrugge.',
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <head>
        {/* Link naar de favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-inter">
        <Navigation />
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 mt-8">
          <div className="container mx-auto px-6 py-3 text-center text-gray-600">
            <p>© 2025 <span className="font-poppins font-semibold">Menno Coppens d&apos;Eeckenbrugge</span>. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}