import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const speakers = [
  {
    name: "Dr. Abubakar Siddique Mohammed",
    title: "Director, CEDDERT",
    description: "A senior lecturer at Ahmadu Bello University and director of CEDDERT, leading voice on democratic governance.",
    image: "/speaker/4.jpg",
  },
  {
    name: "Dr. Zaid Abubakar",
    title: "Executive Chairman, KIRS",
    description: "Transformational tax leader and award-winning accountant driving fiscal governance reforms in Nigeria.",
    image: "/speaker/9.jpg",
  },
  {
    name: "Prof. Abdulhamidu Abdullahi",
    title: "Deputy Coordinator, NACTAL",
    description: "Seasoned academia focused on advocacy and human development in Northern Nigeria.",
    image: "/speaker/8.jpg",
  },
  {
    name: "Engr. Dr. A. S. Abdurrasheed",
    title: "Lecturer, Ahmadu Bello University",
    description: "Award-winning researcher and innovator passionate about sustainable engineering solutions.",
    image: "/speaker/1.jpg",
  },
  {
    name: "Hajiya Adama Haruna Abdulmalik",
    title: "Regional Coordinator, AAAF",
    description: "Dynamic development practitioner and gender advocate dedicated to social justice.",
    image: "/speaker/2.jpg",
  },
  {
    name: "Abdulhaleem Ishaq Ringim",
    title: "SA to Governor on Economic Matters",
    description: "Economic policy enthusiast and youngest participant in Nigeria's premier policy think tank.",
    image: "/speaker/3.jpg",
  },
  {
    name: "Hon. Hafsat Aminu Adhama",
    title: "SSA to Governor on Girl Child Education",
    description: "Trailblazer in education reform who has enrolled over 3,000 out-of-school girls.",
    image: "/speaker/5.jpg",
  },
  {
    name: "Khalil Kabir Mantissa, Esq.",
    title: "Assistant Secretary, NBA Zaria",
    description: "Resilient legal practitioner with an inspiring story of self-determination.",
    image: "/speaker/6.jpg",
  },
  {
    name: "Dr. Ahmad Bello",
    title: "Resident Doctor, ABUTH",
    description: "Dedicated physician and public health leader with expertise in global health and epidemiology.",
    image: "/speaker/7.jpg",
  },
  {
    name: "Abdulmuqeet Hussain",
    title: "CEO, BT Hub",
    description: "Trailblazing digital leader who has trained over 50,000 individuals in digital skills.",
    image: "/speaker/10.jpg",
  },
  {
    name: "Hon. Zubairu Mukhtar",
    title: "SA to Deputy Governor, Kaduna",
    description: "Dynamic public administrator and policy strategist connecting government and communities.",
    image: "/speaker/11.jpg",
  },
  {
    name: "Salim Yunusa",
    title: "Founder, Poetic Wednesdays",
    description: "Creative communications strategist and literary curator promoting creative expression.",
    image: "/speaker/12.jpg",
  },
  {
    name: "Alhaji Sunusi Abdullahi",
    title: "MD, SAJ Foods",
    description: "Entrepreneur who transformed a local idea into a major dairy company in Northern Nigeria.",
    image: "/speaker/13.jpg",
  },
  {
    name: "Dr Fahad Chikaji Ahmad",
    title: "Doctor of Excellence",
    description: "Passionate voice for inclusive governance, digital innovation, and youth empowerment.",
    image: "/speaker/14.jpeg",
  },
  {
    name: "Saratu Samaila",
    title: "Founder, Muryar Matasa Initiative",
    description: "Advocate for inclusivity and youth empowerment, amplifying marginalized voices.",
    image: "/speaker/15.jpeg",
  },
]

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            SPEAKERS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Meet Our <span className="text-primary">Distinguished</span> Speakers
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Visionaries, thought leaders, and change-makers ready to share ideas worth spreading.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="group bg-card border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mt-1">{speaker.title}</p>
                  <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{speaker.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Speakers
          </Button>
        </div>
      </div>
    </section>
  )
}
