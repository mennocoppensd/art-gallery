import Image from 'next/image';
import Link from 'next/link';
import { artworks } from '../data/artworks';

export default function Home() {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {artworks.map((artwork) => (
        <Link href={`/artwork/${artwork.id}`} key={artwork.id}>
          <div className="border rounded overflow-hidden hover:shadow-lg flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center bg-gray-50 min-h-96">
              <Image
                src={artwork.image}
                alt={artwork.title}
                width={500}
                height={500}
                className="object-contain w-full h-auto max-h-96 p-4"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`}
                loading="lazy"
              />
            </div>
            <div className="p-2 bg-white">
              <h2 className="text-lg font-semibold">{artwork.title}</h2>
            </div>
          </div>
        </Link>
      ))}
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