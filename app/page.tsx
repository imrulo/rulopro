import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import ProcessSection from "@/components/process-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import UrgencySection from "@/components/urgency-section"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <UrgencySection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
