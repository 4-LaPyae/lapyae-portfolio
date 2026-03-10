import { useEffect, useState } from "react";
import CircleAnimation from "../components/CircleAnimation";

function AboutSection() {
  const [pulseId, setPulseId] = useState(0);
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    setPulseId((prev) => prev + 1);
    setPulseActive(true);
  }, []);

  return (
    <section className="relative grid w-full gap-8 overflow-hidden md:grid-cols-[0.5fr_1fr]">
      {/* <CircleAnimation
        activationId={pulseId}
        isActive={pulseActive}
        onComplete={() => setPulseActive(false)}
      /> */}
      <p className="font-display text-sm uppercase tracking-[0.35em] text-slate-500">
        About
      </p>
      <div className="space-y-4 text-lg text-slate-600">
        <p>
          I am a software engineer who balances deep technical craft with
          empathy for end users. Over the past 8+ years I have built scalable
          platforms, led cross-functional squads, and helped teams launch
          mission-critical features.
        </p>
        <p>
          I care about durable architecture, readable code, and creating
          workflows where teams can confidently ship.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
