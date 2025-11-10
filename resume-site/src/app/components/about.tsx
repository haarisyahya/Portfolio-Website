export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          About Me
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Full-Stack Engineer with a passion for learning and solving complex problems
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-300">
        I live for learning new tools, cracking tough problems, and constantly iterating on my craft. When I’m not building data pipelines 
        or UI components, you’ll find me on the soccer field (or cheering from the couch), tinkering on a game prototype, lifting weights, cooking up new recipes, or hanging out with my cats.  
        I’m always looking for projects where technology meets innovation. </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        {/* Narrative */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md shadow-lg">
            <h3 className="text-xl font-semibold text-white">What excites me</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
            As an Industry X Developer @ Accenture, I design and deliver automation scripts (Java & PowerShell), end‑to‑end data pipelines, and enterprise‑grade integration solutions (Docker, Kafka, Azure DevOps, JUnit/Mockito) that support engineering and health‑care teams Ontario wide. Previously, I helped launch product features at LiteSpace, led testing initiatives, and collaborated closely with designers to ship polished, reliable experiences.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Outside of client work, I am interested in learning more about cybersecurity and building mobile applications that benefit society.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md shadow-lg">
            <h3 className="text-xl font-semibold text-white">Beyond the screen</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Playing soccer and lifting weights to maintain my mobility and strength.</li>
              <li>• Cooking food for the people I care about and trying new cuisines.</li>
              <li>• Writing and reflecting about life, speaking up for what I believe in and playing video games.</li>
            </ul>
          </div>
        </div>

        {/* Highlight grid */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6 backdrop-blur-md shadow-lg">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Quick Stats</h4>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-400">Years of Experience</dt>
                <dd className="text-2xl font-semibold text-white">2</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-400">Stack</dt>
                <dd className="text-base font-medium text-slate-200">TypeScript · React · Tailwind · Java · Python · SQL</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-400">Currently Learning</dt>
                <dd className="text-base font-medium text-slate-200">Agentic AI, Machine Learning, Cybersecurity, Mobile Application Development</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md shadow-lg">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">What I am looking for</h4>
            <p className="mt-3 text-slate-300">
             Open to product‑engineering, creative‑tech, or cybersecurity roles where I can craft innovative solutions that benefit society and ensure they remain secure.
            </p>
            <p className="mt-3 text-slate-300">
              If you are building something ambitious—or want to collaborate on a design-driven experiment—let&apos;s connect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
