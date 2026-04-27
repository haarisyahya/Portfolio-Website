import Link from 'next/link';

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
        I love learning new tools, solving tough problems, and continuously improving my craft. When I&apos;m not building data pipelines or UI components, you&apos;ll usually find me playing soccer, lifting weights, cooking, or hanging out with my cats.
        I&apos;m always looking for projects where technology meets innovation.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        {/* Narrative */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md shadow-lg">
            <h3 className="text-xl font-semibold text-white">What excites me</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
            I get excited by problems where software has real, measurable impact: automating a process that used to take hours, shipping a feature that unblocks an entire team, or designing a system that scales without breaking a sweat. Right now I'm particularly drawn to cloud infrastructure, distributed systems, and the intersection of AI and developer tooling, areas where the pace of change means there's always something new to figure out.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
            Outside of work, I'm building Transient Radio, a music discovery platform that's been my playground for Next.js, Cloudflare, and Supabase, because I think the best way to learn is to build something you actually care about.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md shadow-lg">
            <h3 className="text-xl font-semibold text-white">Beyond the screen</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Playing soccer and lifting weights to maintain my mobility and strength.</li>
              <li>• Cooking food for the people I care about and trying new cuisines.</li>
              <li>• Writing and reflecting about life, speaking up for what I believe in, and playing video games.</li>
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
                <dd className="text-2xl font-semibold text-white">2+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-400">Stack</dt>
                <dd className="text-base font-medium text-slate-200">TypeScript · React · Tailwind · Java · Python · SQL</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-400">Currently Learning</dt>
                <dd className="text-base font-medium text-slate-200">Agentic AI, Machine Learning, AWS Solutions Architecture (SAA-C03), Mobile Application Development</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-400">Certifications</dt>
                <dd className="text-base font-medium text-slate-200">AWS Certified Cloud Practitioner (CLF-C02) — June 2025</dd>
                <Link
                  href="https://www.credly.com/badges/fe8e98c6-d900-464a-ba11-923a1ac20dd6/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  View verified Credly badge
                </Link>
                <dd className="mt-3 text-base font-medium text-slate-200">Reinvention with Agentic AI Learning Program — Nov 2025</dd>
                <Link
                  href="https://www.credly.com/badges/4e269951-30dc-40b3-a8ca-2cc158c7a678/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  View Agentic AI Credly badge
                </Link>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md shadow-lg">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">What I am looking for</h4>
            <p className="mt-3 text-slate-300">
            Open to cloud-architecture, cloud-security, or infrastructure-engineering roles where I can deliver scalable, secure solutions that improve reliability, automation, and impact.
            </p>
            <p className="mt-3 text-slate-300">
            If you’re building trusted cloud systems—or want to collaborate on a security-driven experiment—let’s connect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
