import { useEffect, useState } from "react";
import CircleAnimation from "../components/CircleAnimation";

function ContactSection() {
  const [pulseId, setPulseId] = useState(0);
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    setPulseId((prev) => prev + 1);
    setPulseActive(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-xl shadow-slate-200/60">
      {/* <CircleAnimation
        activationId={pulseId}
        isActive={pulseActive}
        onComplete={() => setPulseActive(false)}
      /> */}
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Contact
      </p>
      <h2 className="mt-4 font-display text-3xl text-slate-900">
        Ready to build something with real momentum?
      </h2>
      <p className="mt-3 text-slate-600">
        Email me at
        <span className="font-semibold text-slate-900"> hello@lapyae.com</span>
        or message me on LinkedIn.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20"
          href="mailto:hello@lapyae.com"
        >
          Email me
        </a>
        <a
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
