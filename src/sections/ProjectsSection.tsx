import { useEffect, useState } from "react";
import CircleAnimation from "../components/CircleAnimation";

const projects = [
  {
    name: "Pulseboard Analytics",
    role: "Lead Engineer",
    summary:
      "Real-time ops dashboard that reduced incident response times by 38%.",
    stack: ["React", "Node", "Postgres", "WebSockets"],
  },
  {
    name: "Nimbus Fintech",
    role: "Full-stack",
    summary:
      "Composable lending flows with a rules engine that scaled to 1.2M users.",
    stack: ["TypeScript", "NestJS", "Kafka", "GCP"],
  },
  {
    name: "Atlas Forecasting",
    role: "Platform",
    summary:
      "ML-assisted forecasting pipeline powering quarterly planning cycles.",
    stack: ["Python", "FastAPI", "Airflow", "Snowflake"],
  },
];

function ProjectsSection() {
  const [pulseId, setPulseId] = useState(0);
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    setPulseId((prev) => prev + 1);
    setPulseActive(true);
  }, []);

  return (
    <section className="relative w-full space-y-8 overflow-hidden">
      {/* <CircleAnimation
        activationId={pulseId}
        isActive={pulseActive}
        onComplete={() => setPulseActive(false)}
      /> */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-2xl text-slate-900">Projects</h2>
        <p className="text-sm text-slate-500">
          A snapshot of recent product builds.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/60"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                {project.role}
              </p>
              <h3 className="mt-2 font-display text-xl text-slate-900">
                {project.name}
              </h3>
            </div>
            <p className="text-sm text-slate-600">{project.summary}</p>
            <div className="mt-auto flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
