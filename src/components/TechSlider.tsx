export default function TechSlider() {

  const items = [
    { name: "CakePHP", icon: "/icons/cakephp.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
    { name: "C#", icon: "/icons/csharp.svg" },
    { name: ".NET", icon: "/icons/dotnet.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
     { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
  ];

  return (
    <div className="w-full overflow-hidden py-10 bg-gradient-to-r from-blue-900 to-teal-900">

      <div className="flex w-max animate-marquee gap-4 px-4">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white whitespace-nowrap shrink-0"
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5 sm:w-6 sm:h-6" />

            <span className="text-sm sm:text-base font-medium">
              {item.name}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}