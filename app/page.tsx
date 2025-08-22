import { HeroSection } from "@/components/hero-section"
import { TldrSection } from "@/components/tldr-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { PackagesSection } from "@/components/packages-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { ClosingSection } from "@/components/closing-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TldrSection />
      <ProblemSection />
      <SolutionSection />
      <PackagesSection />
      <TestimonialsSection />
      <FaqSection />
      <ClosingSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
