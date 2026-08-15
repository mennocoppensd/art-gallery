import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Menno Coppens d'Eeckenbrugge",
  description: "Learn more about artist Menno Coppens d'Eeckenbrugge and his artistic journey.",
}

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Who is Menno?
        </h1>
        <div className="w-24 h-1 bg-black mx-auto"></div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-1/3">
          <div className="relative w-full lg:w-full h-96 lg:h-auto lg:aspect-square rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mx-0">
            <Image
              src="/images/About2.JPG"
              alt="Menno Coppens d'Eeckenbrugge"
              width={800}
              height={800}
              className="object-cover w-full h-full"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
              fetchPriority="high"
              quality={85}
            />
          </div>
        </div>
        
        <div className="lg:w-2/3 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am Menno, a 23 year old self-taught painter from Asse, Belgium. My artistic interests started early on as a child. I remember drawing a lot because I had a lot of imagination that needed to be expressed.
            </p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
              After completing a bachelor&apos;s degree in New Media Development in August 2024, I decided to focus on my artistic career and dedicate myself to painting. That step felt as the next logical chapter, since I had already a solid foundation in drawing.
            </p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
             My paintings are gestureful yet decisive at the same time. 
             I always try to create a sense of depth and movement. That is my only goal. Other than that, I don&apos;t have any rules, I value my freedom highly. But even in my impulsive brush strokes, I feel a certain drawing sensitivity in terms of composition and form. That critical-thinking part in the impulsiveness happens fast. I react on form, color, rhythm and coincidence. It&apos;s only in the process that I find out what the painting is about. 
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

