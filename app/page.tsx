import Image from 'next/image';
import Link from 'next/link';
import { artworks } from '../data/artworks';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-poppins text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Art Portfolio
            </h1>
            <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
            <h2 className="font-poppins text-3xl md:text-4xl font-light text-gray-700 mb-8 tracking-wide">
              Menno Coppens d&apos;Eeckenbrugge
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
             
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#artworks" 
              className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              Explore Artworks
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 font-medium text-lg"
            >
              About the Artist
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Artworks Section */}
      <section id="artworks" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Featured Artworks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A curated selection of my  works
            </p>
          </div>
          
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {artworks.map((artwork, index) => (
              <Link href={`/artwork/${artwork.id}`} key={artwork.id}>
                <div 
                  className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full bg-white transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 min-h-80 group-hover:from-gray-100 group-hover:to-gray-200 transition-all duration-500">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      width={500}
                      height={500}
                      className="object-contain w-full h-auto max-h-80 p-6 group-hover:scale-110 transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 bg-white border-t border-gray-100">
                    <h3 className="font-poppins text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {artwork.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            {/* <Link 
              href="/artwork" 
              className="inline-flex items-center text-lg text-gray-600 hover:text-black transition-colors font-medium group"
            >
              View All Artworks
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

// Add these functions at the end of the file
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f3f4f6" offset="20%" />
      <stop stop-color="#e5e7eb" offset="50%" />
      <stop stop-color="#f3f4f6" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f3f4f6" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)