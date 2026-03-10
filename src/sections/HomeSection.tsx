import { Link } from "react-router-dom";
import AutoSlider from "../components/AutoSlider";
import TechSlider from "../components/TechSlider";

const assetSvgs = import.meta.glob("../assets/*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getAsset = (fileName: string) => assetSvgs[`../assets/${fileName}`];

const toolLogos = [
  { label: "HtML", src: getAsset("html-5-svgrepo-com.svg") },
  { label: "CSS", src: getAsset("css-3-svgrepo-com.svg") },
  { label: "JavaScript", src: getAsset("js-svgrepo-com.svg") },
  { label: "PHP", src: getAsset("php2-svgrepo-com.svg") },
  { label: "CakePHP", src: getAsset("cakephp-svgrepo-com.svg") },
  { label: "Laravel", src: getAsset("laravel-svgrepo-com.svg") },
  { label: "C#", src: getAsset("csharp-svgrepo-com.svg") },
  { label: ".Net", src: getAsset("dotnet-svgrepo-com.svg") },
  { label: "Node.js", src: getAsset("nodejs-svgrepo-com.svg") },
  { label: "TypeScript", src: getAsset("typescript-official-svgrepo-com.svg") },
  { label: "Tailwind", src: getAsset("tailwind-svgrepo-com.svg") },
  { label: "MUI", src: getAsset("material-ui-svgrepo-com.svg") },
  { label: "MongoDB", src: getAsset("mongodb-svgrepo-com.svg") },
  { label: "MySQL", src: getAsset("mysql-svgrepo-com.svg") },
  { label: "Apache", src: getAsset("apache-svgrepo-com.svg") },
  { label: "Nginx", src: getAsset("nginx-svgrepo-com.svg") },
  { label: "Git", src: getAsset("git-svgrepo-com.svg") },
  { label: "GitHub", src: getAsset("github-142-svgrepo-com.svg") },
  { label: "Docker", src: getAsset("docker-svgrepo-com.svg") },
  {
    label: "Jira",
    src: getAsset("atlassian-svgrepo-com.svg"),
  },
  { label: "Notion", src: getAsset("notion-svgrepo-com.svg") },
  { label: "AWS", src: getAsset("amazon-pay-svgrepo-com.svg") },

  { label: "Linux", src: getAsset("linux-svgrepo-com.svg") },
  {
    label: "React",
    src: getAsset("react-javascript-js-framework-facebook-svgrepo-com.svg"),
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/4-LaPyae",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.36-1.2-3.36-1.2-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.6.07-.6 1.02.07 1.55 1.05 1.55 1.05.9 1.55 2.36 1.1 2.94.84.1-.66.35-1.1.64-1.36-2.22-.25-4.56-1.1-4.56-4.9 0-1.08.4-1.96 1.02-2.65-.1-.26-.44-1.3.1-2.7 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.3 2.74-1.02 2.74-1.02.54 1.4.2 2.44.1 2.7.64.7 1.02 1.57 1.02 2.65 0 3.82-2.35 4.64-4.58 4.88.36.3.68.94.68 1.9v2.8c0 .27.18.58.68.48A10 10 0 0 0 12 2z"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/la.pyae.94270",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M13.5 9H16V6h-2.5C10.9 6 9 7.9 9 10.5V12H7v3h2v6h3v-6h2.5l.5-3H12v-1.5C12 9.7 12.2 9 13.5 9z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/la-pyae-513055246/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56 1.94 1.94 0 0 1 6.94 6.5zM5.25 8.75h3.38V19.5H5.25zM12.5 8.75h3.24v1.48h.05a3.55 3.55 0 0 1 3.2-1.76c3.42 0 4.05 2.25 4.05 5.18v5.85h-3.38v-5.2c0-1.24 0-2.85-1.74-2.85-1.74 0-2 1.35-2 2.74v5.31H12.5z"
        />
      </svg>
    ),
  },
];

function DeveloperAtDeskIllustration() {
  return (
    <svg
      id="developer_at_desk"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className="h-auto w-full"
      role="img"
      aria-label="Developer at desk"
    >
      <ellipse fill="#c9ced6" cx="250" cy="430" rx="170" ry="16" />
      <rect fill="#e0e3e8" x="80" y="310" width="340" height="24" rx="10" />
      <rect fill="#c9ced6" x="110" y="334" width="40" height="90" rx="8" />
      <rect fill="#c9ced6" x="350" y="334" width="40" height="90" rx="8" />

      <rect fill="#1f2937" x="140" y="150" width="220" height="130" rx="12" />
      <rect fill="#111827" x="152" y="162" width="196" height="90" rx="8" />
      <rect fill="#3b82f6" x="180" y="180" width="110" height="8" rx="4" />
      <rect fill="#93c5fd" x="180" y="200" width="150" height="8" rx="4" />
      <rect fill="#3b82f6" x="180" y="220" width="90" height="8" rx="4" />
      <rect fill="#1f2937" x="235" y="280" width="30" height="26" rx="6" />
      <rect fill="#1f2937" x="205" y="300" width="90" height="12" rx="6" />

      <circle fill="#f2c9a0" cx="250" cy="220" r="28" />
      <path
        fill="#1f2937"
        d="M225 215c4-22 46-24 50 0v12c-6-5-14-7-25-7s-19 2-25 7z"
      />
      <rect fill="#2563eb" x="210" y="246" width="80" height="70" rx="14" />
      <rect fill="#374151" x="212" y="312" width="34" height="60" rx="10" />
      <rect fill="#374151" x="254" y="312" width="34" height="60" rx="10" />
      <path
        fill="#f2c9a0"
        d="M210 270c-22 8-38 20-50 38l16 10c8-14 18-22 32-28z"
      />
      <path
        fill="#f2c9a0"
        d="M290 270c22 8 38 20 50 38l-16 10c-8-14-18-22-32-28z"
      />

      <rect fill="#3b82f6" x="200" y="320" width="100" height="10" rx="5" />
      <path
        d="M150 286h200"
        fill="none"
        stroke="#111827"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeSection() {
  return (
    // <section className="relative grid w-full items-center gap-8 overflow-hidden sm:gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:gap-12">
    //   <div className="space-y-5 sm:space-y-6 order-first">
    //     <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.3em] text-muted sm:text-xs">
    //       Software engineer
    //     </p>

    //     <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
    //       I build reliable, high-performance web applications that solve real
    //       problems and deliver measurable value.
    //     </p>
    //     <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
    //       I am passionate about creating seamless user experiences and writing
    //       clean, maintainable code. With a focus on continuous learning and
    //       improvement, I stay up-to-date with the latest technologies and best
    //       practices in the industry.
    //     </p>
    //     <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
    //       <Link
    //         className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 sm:w-auto sm:px-6 sm:py-3"
    //         to="/projects"
    //       >
    //         View projects
    //       </Link>
    //       <Link
    //         className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink sm:w-auto sm:px-6 sm:py-3"
    //         to="/contact"
    //       >
    //         Contact
    //       </Link>
    //       <a
    //         className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink sm:w-auto sm:px-6 sm:py-3"
    //         href="/resume.pdf"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         View Resume
    //       </a>
    //     </div>

    //     <div className="flex flex-wrap items-center gap-2 sm:gap-3">
    //       {socialLinks.map((link) => (
    //         <a
    //           key={link.label}
    //           href={link.href}
    //           aria-label={link.label}
    //           className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition hover:border-slate-900 hover:text-slate-900 sm:h-10 sm:w-10"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           {link.icon}
    //         </a>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="panel-surface order-first rounded-3xl p-5 sm:p-8 md:order-none">
    //     <div className="mx-auto max-w-[260px] sm:max-w-[360px] lg:max-w-[420px]">
    //       <DeveloperAtDeskIllustration />
    //     </div>
    //   </div>
    //   <div className="space-y-4 md:col-span-2">
    //     <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-muted sm:text-xs">
    //       Experts programming and tools
    //     </p>
    //     <div
    //       className="marquee"
    //       aria-label="Programming tools and technologies"
    //     >
    //       <div className="marquee-track" role="list">
    //         {toolLogos.map((tool) => (
    //           <div
    //             className="marquee-item"
    //             role="listitem"
    //             key={`tool-${tool.label}`}
    //           >
    //             <img className="marquee-logo" src={tool.src} alt="" />
    //             {tool.label}
    //           </div>
    //         ))}
    //         {toolLogos.map((tool) => (
    //           <div
    //             aria-hidden="true"
    //             className="marquee-item"
    //             key={`tool-dup-${tool.label}`}
    //           >
    //             <img className="marquee-logo" src={tool.src} alt="" />
    //             {tool.label}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="relative w-full overflow-hidden py-10">
  <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-14">

    {/* LEFT CONTENT */}
    <div className="space-y-6">

      <p className="inline-flex w-fit items-center rounded-full border border-line bg-white/70 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.3em] text-muted sm:text-xs">
        Software Engineer
      </p>

      <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
        I build reliable, high-performance web applications that solve real
        problems and deliver measurable value.
      </p>

      <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
        I am passionate about creating seamless user experiences and writing
        clean, maintainable code. With a focus on continuous learning and
        improvement, I stay up-to-date with the latest technologies.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-3">

        <Link
          to="/projects"
          className="flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800"
        >
          View Projects
        </Link>

        <Link
          to="/contact"
          className="flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-slate-900"
        >
          Contact
        </Link>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-slate-900"
        >
          View Resume
        </a>

      </div>

      {/* SOCIAL ICONS */}
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-slate-900 hover:text-slate-900"
          >
            {link.icon}
          </a>
        ))}
      </div>

    </div>


    {/* RIGHT ILLUSTRATION */}
    <div className="flex justify-center">
      <div className="panel-surface w-full max-w-sm rounded-3xl p-6 sm:max-w-md lg:max-w-lg">
        <DeveloperAtDeskIllustration />
      </div>
    </div>

  </div>


  {/* TOOLS MARQUEE */}
  <div className="space-y-4">

    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted sm:text-xs">
      Programming Tools
    </p>

    <div className="marquee w-full overflow-hidden" aria-label="Programming tools">

      <div className="marquee-track flex gap-8">

        {toolLogos.map((tool) => (
          <div
            key={`tool-${tool.label}`}
            className="marquee-item flex items-center gap-2 whitespace-nowrap text-sm"
          >
            <img
              src={tool.src}
              alt={tool.label}
              className="h-6 w-6 object-contain"
            />
            {tool.label}
          </div>
        ))}

        {toolLogos.map((tool) => (
          <div
            key={`tool-dup-${tool.label}`}
            aria-hidden="true"
            className="marquee-item flex items-center gap-2 whitespace-nowrap text-sm"
          >
            <img
              src={tool.src}
              alt=""
              className="h-6 w-6 object-contain"
            />
            {tool.label}
          </div>
        ))}

      </div>

    </div>

  </div>
</section>

  );
}

export default HomeSection;
