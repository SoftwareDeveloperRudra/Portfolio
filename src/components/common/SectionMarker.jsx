import React from 'react';

export default function SectionMarker({ number, label, dark = false }) {
  return <div className={`mb-8 flex items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.24em] ${dark ? 'text-slate-500' : 'text-slate-600'}`}>
    <span className="text-cyan-300">{number}</span><span className="h-px w-8 bg-white/10"/><span>{label}</span>
  </div>;
}
