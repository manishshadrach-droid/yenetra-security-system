import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-[9999] transition duration-300 flex items-center justify-center text-2xl"
    >
      <FaWhatsapp />
    </a>
  );
}