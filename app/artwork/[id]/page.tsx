import { artworks } from '../../../data/artworks';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ArtworkProps {
  params: { id: string };
}

export default function ArtworkPage({ params }: ArtworkProps) {
  const artwork = artworks.find((a) => a.id === params.id);

  if (!artwork) {
    notFound();
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Image
        src={artwork.image}
        alt={artwork.title}
        width={800}
        height={800}
        className="object-cover w-full h-auto"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 800))}`}
        priority
      />
      <h1 className="text-2xl font-bold mt-4">{artwork.title}</h1>
      <p className="mt-2">{artwork.description}</p>
      <p className="mt-2">
        <strong>Dimensions:</strong> {artwork.dimensions}
      </p>
      <p className="mt-1">
        <strong>Medium:</strong> {artwork.medium}
      </p>
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