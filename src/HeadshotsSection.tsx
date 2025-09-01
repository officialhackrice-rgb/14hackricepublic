import React, { useRef } from "react";

type Headshot = {
  name: string;
  role: string;
  image: string;
};

const headshots: Headshot[] = [
  { name: "Stella Chen", role: "Director", image: "/assets/hr15-headshots/stella-chen.jpeg" },
  { name: "Varshini Loganathan", role: "Director", image: "/assets/hr15-headshots/varshini.JPG" },
  { name: "Faith Zhang", role: "Director", image: "/assets/hr15-headshots/faith.webp" },
  { name: "Richa Jayanti", role: "Tracks & Workshops", image: "/assets/hr15-headshots/richa-jayanti.jpg" },
  { name: "Carolyn Lu", role: "Tracks & Workshops", image: "/assets/hr15-headshots/carolyn-lu.JPG" },
  { name: "Jack Shen", role: "Tracks & Workshops", image: "/assets/hr15-headshots/jack-shen.JPG" },
  { name: "Luciano Perez", role: "Publicity & Registration", image: "/assets/hr15-headshots/luciano-perez.jpg" },
  { name: "Lakshanyaa Rajkumar", role: "Publicity & Registration", image: "/assets/hr15-headshots/lakshanyaa.jpg" },
  { name: "Andrew Chu", role: "Industry Outreach", image: "/assets/hr15-headshots/andrew-chu.JPG" },
  { name: "John Tian", role: "Industry Outreach", image: "/assets/hr15-headshots/john-tian.png" },
  { name: "Lexi Xu", role: "Industry Outreach", image: "/assets/hr15-headshots/lexi-xu.jpg" },
];

const HeadshotCard: React.FC<Headshot> = ({ name, role, image }) => (
  <div className="flex-shrink-0 w-full sm:w-1/2 md:w-auto text-center mx-2 mb-4 md:mb-0">
    <img
      src={image}
      alt={name}
      className="w-16 h-16 mx-auto rounded-full object-cover border border-white"
    />
    <p className="text-sm font-medium text-white mt-2">{name}</p>
    <p className="text-xs text-white/60">{role}</p>
  </div>
);

const HeadshotsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 150;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-12 py-6 px-4 sm:px-6 md:px-8 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm font-semibold text-white uppercase mb-4 tracking-wide text-center">
          HR15 is brought to you by
        </h3>

        <div className="relative">
          {/* Arrows only show on medium+ screens */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 z-10 text-white text-xl hover:text-white/70 transition"
            aria-label="Scroll Left"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="
              flex flex-col items-center
              md:flex-row md:overflow-x-auto md:space-x-4 md:px-6
              scrollbar-hide
            "
          >
            {headshots.map((person, index) => (
              <HeadshotCard key={index} {...person} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-white text-xl hover:text-white/70 transition"
            aria-label="Scroll Right"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeadshotsSection;
