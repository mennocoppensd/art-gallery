// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { artworks } from '../data/artworks';

export default function Home() {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {artworks.map((artwork) => (
        <Link href={`/artwork/${artwork.id}`} key={artwork.id}>
          <div className="border rounded overflow-hidden hover:shadow-lg">
            <Image
              src={artwork.image}
              alt={artwork.title}
              width={500}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold">{artwork.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
