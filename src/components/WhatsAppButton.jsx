import { whatsappUrl } from "../data/site"
import { WhatsAppIcon } from "./WhatsAppIcon"

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NexLance on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#1ebe5b] focus-visible:outline-offset-4"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
