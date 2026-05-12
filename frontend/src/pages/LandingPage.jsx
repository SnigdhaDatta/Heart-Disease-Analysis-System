import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="grid gap-4 md:grid-cols-3 soft-rise">
      <div className="glass-panel card-hover idle-float md:col-span-2 p-6 md:p-8">
        <p className="inline-flex rounded-full border border-brand-500/30 bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-100">
          AI-Assisted Clinical Triage
        </p>
        <h2 className="gradient-title hero-title-anim mt-3 text-3xl font-black tracking-tight md:text-5xl">
          Modern Heart Risk Intelligence for faster care decisions.
        </h2>
        <p className="hero-subtitle-anim mt-3 max-w-2xl text-sm leading-6 text-slate-300">
          Collect patient vitals, run SVM inference instantly, and surface clear
          risk tier with hospitalization guidance. Built for quick screening
          flows.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="card-hover rounded-xl border border-slate-700 bg-slate-800/70 p-3">
            <p className="text-xs text-slate-400">Inference Time</p>
            <p className="text-lg font-bold text-white">&lt; 1 sec</p>
          </div>
          <div className="card-hover rounded-xl border border-slate-700 bg-slate-800/70 p-3">
            <p className="text-xs text-slate-400">Clinical Inputs</p>
            <p className="text-lg font-bold text-white">13 Features</p>
          </div>
          <div className="card-hover rounded-xl border border-slate-700 bg-slate-800/70 p-3">
            <p className="text-xs text-slate-400">Output</p>
            <p className="text-lg font-bold text-white">Risk + Action</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/predict"
            className="interactive-button interactive-button-normal shine-button rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-700"
          >
            Start Prediction
          </Link>
          <Link
            to="/about"
            className="interactive-button interactive-button-normal rounded-xl border border-slate-600 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
          >
            Product Overview
          </Link>
        </div>
      </div>

      <div className="glass-panel card-hover idle-float-delayed p-6">
        <h3 className="text-base font-bold text-white">Workflow</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-300">
          <li>Open Predict workspace</li>
          <li>Enter patient measurements</li>
          <li>Generate model outcome</li>
          <li>Review hospitalization recommendation</li>
        </ol>

        <div className="mt-5 rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
            Pro Insight
          </p>
          <p className="mt-1 text-sm text-cyan-100">
            Keep this form as your triage front-desk step before physician
            escalation.
          </p>
        </div>
      </div>
    </section>
  );
}