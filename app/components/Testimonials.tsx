"use client";

import Reveal from "./Reveal";

export default function Testimonials() {
  const testimonials = [
  {
    name: "Priya Reddy, Hyderabad",
    text: "Installed blackout blinds in our 3BHK. The finish and fitting were flawless.",
  },
  {
    name: "Amit Sharma, Jubilee Hills",
    text: "Their custom curtains completely transformed our living room ambiance.",
  },
  {
    name: "Rahul Mehta, Gachibowli",
    text: "Professional consultation and timely installation. Highly recommend.",
  },
];

  return (
    <section className="py-40 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <Reveal>
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tightfont-[var(--font-playfair)]">
            Client Experiences
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-12">

          {testimonials.map((item, index) => (
            <Reveal key={index}>
              <div className="bg-white p-10 shadow-sm">
                <p className="font-[var(--font-inter)] text-gray-600 leading-relaxed">
                  "{item.text}"
                </p>
                <h4 className="mt-8 font-[var(--font-playfair)] text-lg">
                  {item.name}
                </h4>
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}