import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div className="pointer-events-none fixed left-0 right-0 top-0 z-[70] h-[2px] bg-transparent" aria-hidden="true"><div className="h-full origin-left bg-gradient-to-r from-blue-500 via-cyan-300 to-white shadow-[0_0_14px_rgba(34,211,238,.7)]" style={{ width: `${progress}%` }} /></div>;
}
