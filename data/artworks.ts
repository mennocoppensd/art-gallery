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
      title: 'Untitled, 2025',
      image: '/images/artwork1.jpg',
      description: '/',
      dimensions: '60 x 80 cm',
      medium: 'Oil on Canvas',
    },
    {
      id: '2',
      title: 'Untitled, 2025',
      image: '/images/artwork2.jpg',
      description: '/',
      dimensions: '60 x 80 cm',
      medium: 'Oil on Canvas',
    },
    {
      id: '3',
      title: 'Untitled, 2025',
      image: '/images/artwork3.jpg',
      description: '/',
      dimensions: '70 x 90 cm',
      medium: 'Oil on Canvas',
    },
    {
      id: '4',
      title: 'Untitled, 2024',
      image: '/images/artwork4.jpg',
      description: '/',
      dimensions: '60 x 80 cm',
      medium: 'Oil on Canvas',
    },
    {
      id: '5',
      title: 'Untitled, 2024',
      image: '/images/artwork5.jpg',
      description: '/',
      dimensions: '60 x 80 cm',
      medium: 'Oil on Canvas',
    },
    {
      id: '6',
      title: 'Untitled, 2024',
      image: '/images/artwork6.jpg',
      description: '/',
      dimensions: '210 x 297 mm',
      medium: 'Chinese Ink on A4 paper',
    },
    {
      id: '7',
      title: 'Untitled, 2024',
      image: '/images/artwork7.jpg',
      description: '/',
      dimensions: '210 x 297 mm',
      medium: 'Chinese Ink on A4 paper',
    },
    // Add more artworks as needed
  ];
  