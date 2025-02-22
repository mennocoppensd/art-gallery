import Image from 'next/image';

interface ArtworkDetailsProps {
  artwork: {
    image: string;
    title: string;
    description: string;
    dimensions: string;
    medium: string;
  };
}

export default function ArtworkDetails({ artwork }: ArtworkDetailsProps) {
  return (
    <>
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
    </>
  );
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)