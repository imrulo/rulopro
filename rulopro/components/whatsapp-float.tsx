import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const whatsappUrl = "https://wa.link/6difl3"

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  )
}
