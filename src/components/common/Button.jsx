import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 overflow-hidden group focus:outline-none';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-600 shadow-neon-blue hover:shadow-blue-500/50',
    secondary: 'bg-secondary text-white hover:bg-purple-600 shadow-neon-purple hover:shadow-purple-500/50',
    outline: 'border border-white/10 glass-panel text-text hover:border-primary/50 hover:text-white',
    ghost: 'text-text-muted hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase',
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base tracking-wide',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      {...props}
    >
      {/* Background shimmer effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      
      <span className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === 'left' && <Icon className="text-lg transition-transform group-hover:-translate-x-1" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="text-lg transition-transform group-hover:translate-x-1" />}
      </span>
    </motion.button>
  );
};

export default Button;