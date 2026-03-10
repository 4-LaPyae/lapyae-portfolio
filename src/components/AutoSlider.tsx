import { useEffect, useState } from "react";

const slides = [
  {
    title: "Fast Performance",
    text: "Our system runs extremely fast.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    )
  },
  {
    title: "Secure",
    text: "Your data is protected and safe.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          d="M12 11c0-1.1.9-2 2-2s2 .9 2 2v1h-4v-1zM6 11V9a6 6 0 0112 0v2"/>
      </svg>
    )
  },
  {
    title: "Easy Integration",
    text: "Works smoothly with your apps.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          d="M8 9l3 3-3 3m5-6l3 3-3 3"/>
      </svg>
    )
  }
];
  const items = [
    { name: "CakePHP", icon: "/icons/cakephp.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
    { name: "C#", icon: "/icons/csharp.svg" },
    { name: ".NET", icon: "/icons/dotnet.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
  ];

export default function AutoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="w-full max-w-xl mx-auto overflow-hidden">
    //   <div
    //     className="flex transition-transform duration-700"
    //     style={{ transform: `translateX(-${current * 100}%)` }}
    //   >
    //     {slides.map((slide, index) => (
    //       <div
    //         key={index}
    //         className="min-w-full flex flex-col items-center justify-center p-10 text-center"
    //       >
    //         <div className="text-blue-500 mb-4">{slide.svg}</div>
    //         <h2 className="text-xl font-bold">{slide.title}</h2>
    //         <p className="text-gray-500 mt-2">{slide.text}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
     <div className="w-full overflow-hidden py-10 bg-slate-900">

      <div className="flex animate-marquee gap-4">

        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white whitespace-nowrap"
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            {item.name}
          </div>
        ))}

      </div>

    </div>
  );
}