// app/about/page.tsx
export const metadata = {
    title: 'About - Art Gallery',
  };
  
  export default function About() {
    return (
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">About Menno</h1>
        <p className="mb-4">
          [Insert artist biography here. Include background, education, and artistic journey.]
        </p>
        <p className="mb-4">
          [Include artist statement, discussing the themes and inspirations behind the artworks.]
        </p>
        <p className="mb-4">
          [Mention any significant achievements, awards, or exhibitions.]
        </p>
      </div>
    );
  }
  