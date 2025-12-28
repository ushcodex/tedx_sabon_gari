import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function SpeakersPage() {
  const speakers = [
    {
      name: "Dr. Abubakar Siddique Mohammed",
      title: "Director, Centre for Democratic Development Research and Training (CEDDERT)",
      bio: "A senior lecturer at Ahmadu Bello University and director of CEDDERT, Dr. Mohammed is a leading voice on democratic governance, public policy, and development in Nigeria. With advanced degrees from French institutions, he brings scholarly insight to critical issues of human rights, governance reforms, and youth development.",
      image: "/speaker/4.jpg",
    },
    {
      name: "Dr. Zaid Abubakar",
      title: "Executive Chairman, Kano State Internal Revenue Service",
      bio: "A transformational tax leader and award-winning accountant driving fiscal governance reforms in Nigeria. As Executive Chairman of Kano State IRS, he's leading digitization efforts and taxpayer engagement. A member of Nigeria's Presidential Fiscal Policy and Tax Reforms Committee.",
      image: "/speaker/9.jpg",
    },
    {
      name: "Prof. Abdulhamidu Abdullahi",
      title: "Deputy Coordinator, NACTAL Kaduna State",
      bio: "A seasoned academia and community development worker focused on advocacy and human development. He serves in leadership roles with NACTAL and the Kaduna State Local Government Accountability Mechanism. A regular public commentator on radio and TV.",
      image: "/speaker/8.jpg",
    },
    {
      name: "Engr. Dr. A. S. Abdurrasheed",
      title: "Lecturer, Ahmadu Bello University Zaria",
      bio: "An award-winning researcher and innovator passionate about sustainable engineering solutions and youth empowerment. With a Ph.D. in Civil & Environmental Engineering, he has authored over 28 publications. Founder of the ABU Energy Innovation Challenge.",
      image: "/speaker/1.jpg",
    },
    {
      name: "Hajiya Adama Haruna Abdulmalik",
      title: "Northern Regional Coordinator, AJoke Ayisat Afolabi Foundation",
      bio: "A dynamic development practitioner and gender advocate dedicated to social justice, women's inclusion, and grassroots transformation in Northern Nigeria. She champions the rights of marginalized communities.",
      image: "/speaker/2.jpg",
    },
    {
      name: "Abdulhaleem Ishaq Ringim",
      title: "Special Assistant to Governor of Kaduna State on Economic Matters",
      bio: "An award-winning writer and economic policy enthusiast influencing governance and development discourse in Nigeria. At 24, he became the youngest participant in Nigeria's premier policy think tank program.",
      image: "/speaker/3.jpg",
    },
    {
      name: "Hon. Hafsat Aminu Adhama",
      title: "SSA to Governor of Kano State on Girl Child Education",
      bio: "A trailblazer in education reform and girls' empowerment who has enrolled over 3,000 out-of-school girls and mentored 10,000+ across Kano State. Leads the World Bank-funded AGILE Second Chance Education Project.",
      image: "/speaker/5.jpg",
    },
    {
      name: "Khalil Kabir Mantissa, Esq.",
      title: "Assistant Secretary, Nigerian Bar Association Zaria Branch",
      bio: "A resilient legal practitioner with an inspiring story of self-determination. Graduated with a 2:1 from ABU Zaria and Nigerian Law School, now leading his own law firm with a 90% case success rate.",
      image: "/speaker/6.jpg",
    },
    {
      name: "Dr. Ahmad Bello",
      title: "Resident Doctor, Ahmadu Bello University Teaching Hospital",
      bio: "A dedicated physician and public health leader with expertise in global health, epidemiology, and outbreak response. Holds over 15 international certifications and recently earned a Master's in Public Health.",
      image: "/speaker/7.jpg",
    },
    {
      name: "Abdulmuqeet Hussain",
      title: "CEO, BT Hub",
      bio: "A trailblazing digital leader who has trained over 50,000 individuals in digital skills and innovation. Through partnerships with tech giants like Microsoft and Google, he's creating waves of transformation in education, business, and technology.",
      image: "/speaker/10.jpg",
    },
    {
      name: "Hon. Zubairu Mukhtar",
      title: "Special Assistant to Deputy Governor of Kaduna State",
      bio: "A dynamic public administrator and policy strategist with over a decade of experience in Nigeria's public service. Currently a Ph.D. student in Public Administration at ABU Zaria.",
      image: "/speaker/11.jpg",
    },
    {
      name: "Salim Yunusa",
      title: "Founder, Poetic Wednesdays Initiative",
      bio: "A creative communications strategist and literary curator promoting creative expression in Northern Nigeria. Founder of the pioneering Kano International Poetry Festival and a freelance journalist with HumAngle Media.",
      image: "/speaker/12.jpg",
    },
    {
      name: "Alhaji Sunusi Abdullahi",
      title: "Founder and Managing Director, SAJ Foods",
      bio: "Alhaji Sunusi began with a simple but bold idea: produce wholesome, affordable dairy products. Through perseverance, he transformed that idea into SAJ Foods, a Zaria-based dairy company now known across Northern Nigeria.",
      image: "/speaker/13.jpg",
    },
    {
      name: "Dr Fahad Chikaji Ahmad",
      title: "Doctor of Excellence, Kaduna State Gender Ambassador",
      bio: "Dr. Fahad brings a wealth of knowledge, experience, and transformative insight. A passionate voice for inclusive governance, digital innovation, and youth empowerment. His leadership is rooted in integrity and knowledge.",
      image: "/speaker/14.jpeg",
    },
    {
      name: "Saratu Samaila",
      title: "Founder, Muryar Matasa Initiative",
      bio: "A passionate advocate and changemaker whose life and work are deeply rooted in the belief that inclusivity is a right. A young woman with a visual disability, she has dedicated her journey to amplifying the voices of youths and marginalized communities.",
      image: "/speaker/15.jpeg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 text-center bg-zinc-950">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          DISTINGUISHED <span className="text-primary">SPEAKERS</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
          Meet the thought leaders, innovators, and changemakers who will share powerful ideas at TEDxSabonGari 2026.
        </p>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, i) => (
              <div
                key={i}
                className="group bg-zinc-900 rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 flex flex-col"
              >
                <div className="aspect-square relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{speaker.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4">{speaker.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
