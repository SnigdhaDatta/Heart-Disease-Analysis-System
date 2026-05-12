import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import PredictPage from "./pages/PredictPage";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  const linkClass = ({ isActive }) =>
    `interactive-button rounded-full px-3 py-1.5 text-sm font-semibold transition ${
      isActive
        ? "bg-brand-500 text-white"
        : "text-slate-200 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -top-16 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl float-orb" />
      <div className="pointer-events-none absolute top-56 -right-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl float-orb" />

      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/75 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <h1 className="brand-heading text-lg font-extrabold tracking-tight text-white cursor-default">
            Heart Disease Analysis
          </h1>
          <nav className="flex items-center gap-2">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/predict" className={linkClass}>
              Predict
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="soft-fade relative z-10 mx-auto w-full max-w-6xl px-4 py-6 md:py-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/predict" element={<PredictPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <footer className="soft-fade mx-auto w-full max-w-6xl px-4 pb-8 text-xs text-slate-500">
        Built with React, Tailwind, FastAPI, and SVM model inference.
      </footer>
    </div>
  );
}