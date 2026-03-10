const skills = [
  "Product-minded engineering",
  "Distributed systems",
  "Design systems",
  "Observability + SRE",
  "APIs + integrations",
  "Mentorship + delivery",
];

function SkillsSection() {

  return (
    <section className="relative w-full space-y-8 overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-slate-900">Skills</h2>
        <span className="text-sm text-slate-500">Toolkit focus</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-slate-200 bg-white/70 p-5 text-sm font-semibold text-slate-700"
          >
            {skill}
          </div>
        ))}
      </div>
       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-slate-200 bg-white/70 p-5 text-sm font-semibold text-slate-700"
          >
            {skill}
          </div>
        ))}
      </div>
       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-slate-200 bg-white/70 p-5 text-sm font-semibold text-slate-700"
          >
            {skill}
          </div>
        ))}
      </div>
       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-slate-200 bg-white/70 p-5 text-sm font-semibold text-slate-700"
          >
            {skill}
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default SkillsSection;
