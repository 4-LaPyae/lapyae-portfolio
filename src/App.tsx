import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    to: "/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 11.5 12 5l8 6.5" />
        <path d="M6 10.5V20h12v-9.5" />
      </svg>
    ),
  },
  {
    label: "About",
    to: "/about",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
        <path d="M4 20.5a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    label: "Skills",
    to: "/skills",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8h6v6H4Z" />
        <path d="M14 4h6v6h-6Z" />
        <path d="M14 14h6v6h-6Z" />
      </svg>
    ),
  },
  {
    label: "Projects",
    to: "/projects",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4 18 5.5-5.5 3 3L18 10l2 2" />
        <path d="M20 6h-8" />
        <path d="M20 20H4V4" />
      </svg>
    ),
  },
  {
    label: "Contact",
    to: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4Z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
];

const THEME_STORAGE_KEY = "portfolio-theme";

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme());
  const [doorVisible, setDoorVisible] = useState(true);
  const [doorCycle, setDoorCycle] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    setDoorVisible(true);
    setDoorCycle((prev) => prev + 1);
    const timer = window.setTimeout(() => setDoorVisible(false), 1600);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-porcelain text-ink">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 robot-halo" />
        <div className="absolute inset-0 robot-grid" />
        {/* <svg
          className="robot-moon absolute right-[5%] top-[-1%] h-64 w-64 md:h-80 md:w-80"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="moonGlow" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#f5fbff" />
              <stop offset="100%" stopColor="#b8e7ff" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="78" fill="url(#moonGlow)" />
          <circle cx="70" cy="80" r="14" fill="#d7f0ff" />
          <circle cx="130" cy="110" r="10" fill="#c5e6ff" />
          <circle cx="95" cy="130" r="6" fill="#d7f0ff" />
        </svg> */}
        <div className="absolute -bottom-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-aqua/30 blur-[140px]" />
        {/* <div className="absolute bottom-24 right-[12%] h-72 w-72 rounded-full circuit-ring" /> */}
      </div>

      {doorVisible && (
        <div className="door-overlay" aria-hidden="true" key={doorCycle}>
          <div className="door-panel door-panel-left" />
          <div className="door-panel door-panel-right" />
        </div>
      )}

      <button
        className="fixed right-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted shadow-lg shadow-slate-900/10 backdrop-blur"
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M4.93 4.93 6.34 6.34" />
            <path d="M17.66 17.66 19.07 19.07" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M4.93 19.07 6.34 17.66" />
            <path d="M17.66 6.34 19.07 4.93" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
            <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z" />
          </svg>
        )}
        <span className="text-[10px] tracking-[0.2em]">
          {theme === "light" ? "Light" : "Dark"}
        </span>
      </button>

      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 pb-32 pt-16">
        <Outlet />
      </main>

      <nav className="fixed bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-white/70 opacity-80 px-3 py-2 text-sm font-semibold text-muted shadow-xl shadow-slate-900/15 backdrop-blur">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                "group relative flex h-10 w-10 items-center justify-center rounded-full transition",
                isActive
                  ? "bg-slate-900 text-white"
                  : "hover:bg-white/70",
              ].join(" ")
            }
            aria-label={item.label}
          >
            <span className="h-5 w-5 text-current bg-white">
              {item.icon}
            </span>
            <span className="pointer-events-none absolute -top-9 rounded-full bg-slate-900 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white opacity-0 transition group-hover:opacity-100">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default App;
