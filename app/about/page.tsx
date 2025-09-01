import Image from "next/image"

export const metadata = {
  title: "About - Menno Coppens d'Eeckenbrugge",
  description: "Learn more about artist Menno Coppens d'Eeckenbrugge and his artistic journey."
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
              src="/images/About2.jpg?height=400&width=400"
              alt="Menno Coppens d'Eeckenbrugge"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        
        <div className="lg:w-2/3 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a 23 year old self-taught artist born and raised in Flanders, Belgium. My artistic interests started early on as a child. I remember drawing a lot because I had a lot of imagination that needed to be expressed.
            </p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
              After completing a bachelor&apos;s degree in New Media Development in August 2024 and establishing myself in a full-time IT job in Brussels, I decided to focus on my artistic career and dedicate myself to painting. That choice felt more then a necessity than a choice, in order to realign with myself again.
            </p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
              Through weekly painting sessions, by exploring and experimenting, I am becoming more and more passionate about painting. Fueling myself by reading, talking, watching images and looking at everything that catches my eyes in real life, my oeuvre is getting its identity, while my own identity is still evolving as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

