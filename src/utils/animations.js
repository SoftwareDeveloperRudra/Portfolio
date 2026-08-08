export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const hoverMagnetic = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } },
  tap: { scale: 0.95 },
};