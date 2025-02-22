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
          <p className="mb-4">Hallo, ik ben Menno! 22 jaar, afkomstig van het mooie Pajottenland in Asse, en in Gent verzeild geraakt door mijn studies.

            Sinds mijn 7e heb ik tekenschool gedaan als hobby, en tussen mijn 16 en 18 audivisuele vormgeving, ook als hobby.

            Toen ik daarna mijn studiekeuze moest maken, had ik geen idee wat ik wilde doen. Mijn vader gaf mij de raad om een studie te kiezen waar veel jobzekerheid te vinden is, en waar ik goed mijn boterham mee kan verdienen.

            Uiteindelijk heb ik gekozen voor New Media Development, aan de Arteveldehogeschool in Mariakerke, Gent. Een 'creatieve' IT richting waar ik heb geleerd om websites en apps te bouwen.

            Het was een helse periode, omdat het eigenlijk niet iets was waar ik volledig door gebeten was.

            


          </p>
          <p className="mb-4">
          Nu ik in 2024 ben afgestudeerd, heb ik in september 2024 de klik gemaakt om naast mijn full-time IT job mij te verdiepen in de schilderkunst.

Op zondag schilder ik in het vrij atelier van Jeroen Du Bois, en ben nu aan een serieuzere commitment gestart in het schilderen.

In het proces van het schilderen hecht ik veel belang aan het intuïtieve en ongedwongen aspect. Door middel van olieverf op doek laat ik mijn intuïtie spreken.

Er hoeft geen raadsel opgelost te worden, het hoeft niets te betekenen, ik vind het net mooi dat het gewoon mag zijn. Ratio is niet nodig.

Het is een proces van ontdekking, waarbij toeval een belangrijke rol speelt.

          </p>
          <p className="mb-4">Door lagen te manipuleren, ontstaan kleurtinten, vormen en texturen die zich buiten mijn bewuste intentie ontvouwen. Een schilderij wordt constant geherdefinieert. Dat vind ik net zo interessant, dat de dialoog tussen kijker en beeld een momentopname is.</p>
        </div>
      </div>
    </div>
  )
}

