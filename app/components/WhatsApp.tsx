import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  const phone = "919876543210"; // replace with your WhatsApp number

  const message = encodeURIComponent(
    "Hello Yenetra, I would like to inquire about surveillance systems or security installation."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Yenetra on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center
      w-14 h-14 rounded-full bg-green-500 text-white text-2xl
      shadow-lg hover:shadow-green-500/40 hover:bg-green-600
      transition-all duration-300"
    >
      <FaWhatsapp />
    </a>
  );
}