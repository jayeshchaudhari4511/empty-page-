export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,196,118,0.22),_transparent_32%),linear-gradient(180deg,_#fffaf3_0%,_#fff_52%,_#f6f3ee_100%)] px-6 py-10 text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-10">
        <header className="flex items-center justify-between gap-4 rounded-full border border-white/70 bg-white/75 px-5 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
              Jayesh Chaudhari
            </p>
            <p className="text-sm text-slate-500">Frontend portfolio starter</p>
          </div>
          <a
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            href="https://vercel.com/new"
            target="_blank"
            rel="noreferrer"
          >
            Deploy on Vercel
          </a>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900">
              Ready to ship a clean first impression
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                A simple, polished home page for your next deployment.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                This starter page is built to replace the default template with a
                focused landing experience that looks good on mobile, desktop,
                and Vercel previews.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition hover:bg-amber-600"
                href="#features"
              >
                See what&apos;s included
              </a>
              <a
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                href="https://nextjs.org/docs/app/building-your-application/deploying"
                target="_blank"
                rel="noreferrer"
              >
                Deployment guide
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-500">Status</p>
                <p className="mt-1 text-2xl font-semibold text-slate-950">
                  Deployment-ready
                </p>
              </div>
              <div className="grid gap-3 text-sm text-slate-600">
                <div className="rounded-2xl bg-slate-50 px-4 py-3">
                  Clean hero section with clear call to action.
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3">
                  Responsive layout designed for Vercel previews.
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3">
                  No extra dependencies required to ship.
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="features" className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Fast setup",
              description:
                "A single-page structure that is easy to customize before publishing.",
            },
            {
              title: "Modern styling",
              description:
                "Tailwind-based layout with soft gradients, spacing, and contrast.",
            },
            {
              title: "Ready to deploy",
              description:
                "Works cleanly with the default Next.js app router and Vercel hosting.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/80 bg-white/80 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)]"
            >
              <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}