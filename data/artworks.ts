// data/artworks.ts
export interface Artwork {
    id: string;
    title: string;
    image: string;
    description: string;
    dimensions: string;
    medium: string;
  }
  
  export const artworks: Artwork[] = [
    {
      id: '1',
      title: 'Untitled, 2024',
      image: '/images/artwork1.jpg',
      description: 'A beautiful depiction of a sunset over rolling hills.',
      dimensions: '24 x 36 inches',
      medium: 'Oil on Canvas',
    },
    {
      id: '2',
      title: 'Untitled, 2024',
      image: '/images/artwork2.jpg',
      description: 'An early morning view of a Untitled, 2024 surrounded by mountains.',
      dimensions: '30 x 40 inches',
      medium: 'Acrylic on Canvas',
    },
    {
      id: '3',
      title: 'Untitled, 2024',
      image: '/images/artwork3.jpg',
      description: 'An early morning view of a Untitled, 2024 surrounded by mountains.',
      dimensions: '30 x 40 inches',
      medium: 'Acrylic on Canvas',
    },
    {
      id: '4',
      title: 'Untitled, 2024',
      image: '/images/artwork4.jpg',
      description: 'An early morning view of a Untitled, 2024 surrounded by mountains.',
      dimensions: '30 x 40 inches',
      medium: 'Acrylic on Canvas',
    },
    {
      id: '5',
      title: 'Untitled, 2024',
      image: '/images/artwork5.jpg',
      description: 'An early morning view of a Untitled, 2024 surrounded by mountains.',
      dimensions: '30 x 40 inches',
      medium: 'Acrylic on Canvas',
    },
    {
      id: '6',
      title: 'Untitled, 2024',
      image: '/images/artwork6.jpg',
      description: 'An early morning view of a Untitled, 2024 surrounded by mountains.',
      dimensions: '30 x 40 inches',
      medium: 'Acrylic on Canvas',
    },
    {
      id: '7',
      title: 'Untitled, 2024',
      image: '/images/artwork7.jpg',
      description: 'An early morning view of a Untitled, 2024 surrounded by mountains.',
      dimensions: '30 x 40 inches',
      medium: 'Acrylic on Canvas',
    },
    // Add more artworks as needed
  ];
  