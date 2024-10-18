// app/artwork/[id]/page.tsx
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
