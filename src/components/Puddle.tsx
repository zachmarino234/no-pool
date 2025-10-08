'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface PuddleProps {
  showName: string;
  role: string; // NPP's role in the production
  imageUrl: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  shapeVariant?: 1 | 2 | 3 | 4 | 5; // Different puddle shapes
}

const Puddle = ({ 
  showName, 
  role, 
  imageUrl, 
  size = 'medium', 
  className = '', 
  shapeVariant = 1 
}: PuddleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const puddleRef = useRef<HTMLDivElement>(null);

  // Responsive size configurations
  const sizeClasses = {
    small: 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48',
    medium: 'w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64',
    large: 'w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80'
  };

  // More organic, irregular puddle shapes
  const puddleShapes = {
    1: '63% 37% 54% 46% / 55% 48% 52% 45%',
    2: '40% 60% 70% 30% / 60% 30% 70% 40%',
    3: '55% 45% 35% 65% / 48% 62% 38% 52%',
    4: '45% 55% 60% 40% / 35% 65% 35% 65%',
    5: '70% 30% 50% 50% / 52% 48% 52% 48%'
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!puddleRef.current || !isHovered) return;

      const rect = puddleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;

      // Reduce parallax on smaller screens to prevent edge visibility
      const isMobile = window.innerWidth < 768;
      const parallaxAmount = isMobile ? 8 : 12;

      // Apply subtle parallax movement
      setParallax({
        x: deltaX * parallaxAmount,
        y: deltaY * parallaxAmount
      });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setParallax({ x: 0, y: 0 });
  };

  return (
    <div
      className={`relative ${className} cursor-pointer group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Puddle container */}
      <div
        ref={puddleRef}
        className={`relative ${sizeClasses[size]}`}
        style={{
          borderRadius: puddleShapes[shapeVariant],
        }}
      >
        {/* Puddle with image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: puddleShapes[shapeVariant],
            boxShadow: isHovered 
              ? '0 8px 30px rgba(3, 150, 255, 0.4)' 
              : '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease'
          }}
        >
          {/* Image with parallax - scaled larger to prevent edge visibility */}
          <div
            className="absolute transition-transform duration-200 ease-out"
            style={{
              // Start larger and centered, then apply parallax
              // The -15% positioning centers the 130% scaled image
              top: '-15%',
              left: '-15%',
              width: '130%',
              height: '130%',
              transform: `translate(${parallax.x}px, ${parallax.y}px) scale(${isHovered ? 1.05 : 1})`,
            }}
          >
            <Image
              src={imageUrl}
              alt={showName}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, 400px"
            />
          </div>

          {/* Slight darkening on hover for contrast */}
          <div
            className="absolute inset-0 bg-black/20 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0
            }}
          />
        </div>

        {/* Ripple effect on hover */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: puddleShapes[shapeVariant],
              border: '2px solid rgba(3, 150, 255, 0.5)',
              animation: 'ripple 1.5s ease-out infinite'
            }}
          />
        )}
      </div>

      {/* Text below puddle - appears on hover */}
      <div
        className="absolute left-1/2 -translate-x-1/2 mt-2 sm:mt-3 md:mt-4 text-center transition-all duration-300 ease-out w-max max-w-[200px]"
        style={{
          top: '100%',
          opacity: isHovered ? 1 : 0,
          transform: `translateX(-50%) translateY(${isHovered ? '0' : '-10px'})`
        }}
      >
        <h3 className="text-neutral-black font-bold text-sm sm:text-base md:text-lg mb-0.5 md:mb-1 drop-shadow-sm">
          {showName}
        </h3>
        <p className="text-neutral-black/80 text-xs sm:text-sm">
          {role}
        </p>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Puddle;