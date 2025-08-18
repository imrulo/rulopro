import { TldrSection } from "@/components/tldr-section"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { PackagesSection } from "@/components/packages-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { ClosingSection } from "@/components/closing-section"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-rulo-off-white">
      <TldrSection />
      <HeroSection />
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
