
const whatsapp = "https://wa.me/919492790807";

const products = [
  {
    name: "CP Plus DVR",
    category: "DVR Systems",
    model: "CP-UVR-0401E1V-I",
    image: "cp plus dvr.webp",
    description: "Digital video recording systems for CCTV surveillance.",
  },
  {
    name: "CP Plus NVR",
    category: "NVR Systems",
    model: "CP-UNR-108F1",
    image: "cp plus nvr.webp",
    description: "Network video recording solutions for IP camera systems.",
  },
  {
    name: "CP Plus Bullet IP Camera",
    category: "Security Cameras",
    model: "CP-URC-TC24PL3C-L-V2-0360",
    image: "cp plus bullet ip.jpg",
    description: "Bullet-style IP camera for security monitoring.",
  },
  {
    name: "CP Plus IP Dome Camera",
    category: "Security Cameras",
    model: "CP-URC-DC24PL3C-L-V2-0360",
    image: "cp plus ip dome.jpg",
    description: "Dome-style IP camera for indoor and outdoor surveillance.",
  },
  {
    name: "HD Dome Camera",
    category: "Security Cameras",
    model: "CP-UMC-DA24L4-L",
    image: "hd dome cp plus.jpg",
    description: "HD dome camera for dependable video surveillance.",
  },
  {
    name: "HD Bullet Camera",
    category: "Security Cameras",
    model: "CP-UMC-TA24L3-L",
    image: "cp plus bullet ip.jpg",
    description: "HD bullet camera for property monitoring.",
  },
  {
    name: "CP Plus 8-Port Switch",
    category: "Networking",
    model: "CP-ANW-HPU8H2-N12",
    image: "cp plus 8 port switcher.jpg",
    description: "Networking equipment for CCTV installations.",
  },
  {
    name: "Surveillance Hard Disk",
    category: "Storage",
    model: "Ask for model details",
    image: "hard disc.jpg",
    description: "Storage solutions for CCTV recording systems.",
  },
  {
    name: "Power Supply",
    category: "Accessories",
    model: "Ask for model details",
    image: "power supply.webp",
    description: "Power accessories for CCTV camera installations.",
  },
  {
    name: "PVC Rack with Extension",
    category: "Accessories",
    model: "Ask for model details",
    image: "pvc rack with extension.jpg",
    description: "Rack accessories for organised CCTV installations.",
  },
  {
    name: "Surveillance Rack 2U",
    category: "Accessories",
    model: "Ask for model details",
    image: "survielance rack 2u.jpg",
    description: "Equipment rack for surveillance system components.",
  },
  {
    name: "Wall Mount Stand",
    category: "Accessories",
    model: "Ask for model details",
    image: "wall stand.jpg",
    description: "Mounting accessories for camera installations.",
  },
  {
    name: "Pole Stand",
    category: "Accessories",
    model: "Ask for model details",
    image: "pole stand.jpg",
    description: "Pole mounting solution for surveillance cameras.",
  },
  {
    name: "HDMI Cable",
    category: "Accessories",
    model: "Ask for model details",
    image: "hdmi cable.jpg",
    description: "HDMI connectivity for surveillance displays.",
  },
  {
    name: "VGA Cable",
    category: "Accessories",
    model: "Ask for model details",
    image: "vga cble.webp",
    description: "Display connectivity accessory.",
  },
  {
    name: "BNC and DC Connectors",
    category: "Accessories",
    model: "Ask for model details",
    image: "bnc dc coonnectors.jpg",
    description: "Connectors for CCTV installation and wiring.",
  },
  {
    name: "RJ45 Connectors",
    category: "Accessories",
    model: "Ask for model details",
    image: "rj 45 e connectors.webp",
    description: "Network connectors for CCTV cabling.",
  },
  {
    name: "PVC Junction Boxes",
    category: "Accessories",
    model: "Ask for model details",
    image: "pvc boxes.webp",
    description: "Protective boxes for camera wiring connections.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            YeNetra CCTV Dealers
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto leading-7">
            Explore our range of CCTV cameras, recording systems,
            networking equipment and installation accessories.
            Contact us for product details and enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {products.map((product) => (
            <article
              key={product.name}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="h-56 bg-white flex items-center justify-center p-5">
                <img
                  src={`/products/${encodeURIComponent(product.image)}`}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <p className="text-cyan-400 text-xs uppercase tracking-widest mb-2">
                  {product.category}
                </p>

                <h2 className="text-lg font-semibold mb-2">
                  {product.name}
                </h2>

                <p className="text-white/50 text-xs mb-3">
                  Model: {product.model}
                </p>

                <p className="text-white/65 text-sm leading-6 min-h-[72px] mb-5">
                  {product.description}
                </p>

                <a
                  href={`${whatsapp}?text=${encodeURIComponent(
                    `Hello YeNetra, I am interested in ${product.name} (${product.model}). Please share the details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-full py-3 px-4 bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-20 border border-white/10 rounded-2xl p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need help choosing the right system?
          </h2>
          <p className="text-white/60 mb-7">
            Contact our team for product information and CCTV solutions.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold px-8 py-3"
          >
            Chat with YeNetra
          </a>
        </div>
      </div>
    </main>
  );
}
