"use client"

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outlined' | 'disabled';
  size?: 'small' | 'normal' | 'large';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  size = 'normal', 
  className = '',
  disabled = false,
  type 
}: ButtonProps) => {
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    normal: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const Component = href && !disabled ? 'a' : 'button';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props: any = href && !disabled 
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { onClick, disabled, type: type || 'button'};

  if (disabled || variant === 'disabled') {
    return (
      <button 
        className={`font-bold rounded-xl bg-gray-400 text-white cursor-not-allowed ${sizeClasses[size]} ${className}`}
        disabled={true}
        style={{ fontFamily: 'aptly, sans-serif' }}
      >
        {children}
      </button>
    );
  }

  return (
    <Component 
      {...props}
      className={`relative inline-block group ${className}`}
    >
      {/* Invisible container for sizing */}
      <span className={`invisible font-bold ${sizeClasses[size]} block`}>{children}</span>
      
      {/* Dark blue background layer (visible on hover) */}
      <span 
        className={`absolute inset-0 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 ${
          variant === 'outlined' ? 'border-2 border-[#013FFD]' : 'bg-[#013FFD]'
        }`}
      />
      
      {/* Light blue foreground that "lifts" on hover with white stroke */}
      <span 
        className={`absolute inset-0 rounded-xl font-bold flex items-center justify-center transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 ${sizeClasses[size]} ${
          variant === 'outlined' 
            ? 'bg-transparent text-[#0396FF] border-2 border-[#0396FF] group-hover:bg-[#0396FF] group-hover:text-white' 
            : 'bg-[#0396FF] text-white'
        }`}
        style={{ 
          fontFamily: 'aptly, sans-serif',
          boxShadow: 'var(--button-shadow)',
        }}
      >
        <style jsx>{`
          .group:hover span:last-child {
            --button-shadow: 0 0 0 2px #FBF7F4 !important;
          }
        `}</style>
        {children}
      </span>
    </Component>
  );
};

export default Button;