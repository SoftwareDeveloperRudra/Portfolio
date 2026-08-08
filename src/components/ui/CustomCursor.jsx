import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener?.('change', update);

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => setHovering(Boolean(e.target.closest('a, button, [role="button"]')));
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    return () => {
      media.removeEventListener?.('change', update);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  if (!enabled) return null;
  return <div className="pointer-events-none fixed inset-0 z-[80] hidden md:block" aria-hidden="true">
    <span className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/50 transition-all duration-150 ${hovering ? 'h-10 w-10 bg-cyan-300/10' : 'h-5 w-5'}`} style={{ left: pos.x, top: pos.y }} />
    <span className="absolute h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(34,211,238,.9)]" style={{ left: pos.x, top: pos.y }} />
  </div>;
}
