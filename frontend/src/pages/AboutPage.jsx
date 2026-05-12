import React from "react";

export default function AboutPage() {
  return (
    <section className="grid gap-4 md:grid-cols-2 fade-up">
      <article className="glass-panel card-hover p-6">
        <h2 className="text-2xl font-bold text-white">About This Platform</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          The interface is designed like a lightweight healthcare SaaS console,
          where data entry and decision output stay in one flow.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Frontend uses React Router and Tailwind. Backend uses FastAPI +
          persisted SVM artifacts for deterministic predictions.
        </p>
      </article>

      <article className="glass-panel card-hover p-6">
        <h3 className="text-lg font-bold text-white">System Blocks</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          <li>React SPA with route-driven pages</li>
          <li>Central API client for fetch logic</li>
          <li>FastAPI inference endpoint with CORS</li>
          <li>Risk + hospitalization guidance response</li>
        </ul>

        <div className="mt-5 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
            Deployment Ready
          </p>
          <p className="mt-1 text-sm text-emerald-100">
            Swap API base URL through environment variable without touching UI
            code.
          </p>
        </div>
      </article>
    </section>
  );
}