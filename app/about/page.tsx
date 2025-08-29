import Image from "next/image"

export const metadata = {
  title: "About - Menno",
}

export default function About() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Who is Menno?</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="relative w-full aspect-square">
            <Image
              src="/images/About.jpg?height=300&width=300"
              alt="Menno"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="mb-4">

          [Text is coming soon...]
          </p>
          <p className="mb-4">
          

          </p>
          <p className="mb-4"></p>
        </div>
      </div>
    </div>
  )
}

