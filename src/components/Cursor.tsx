'use client'; 

import { useEffect, useRef, useState } from 'react';

export default function FancyCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    setIsMobile(window.innerWidth < 768);

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && !isMobile) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      if (glowRef.current && !isMobile) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Glow effect background */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '32px' : '24px',
          height: isHovering ? '32px' : '24px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, rgba(6, 182, 212, 0.2) 100%)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9998,
          transition: 'width 0.2s ease, height 0.2s ease',
          filter: 'blur(8px)',
        }}
      />
      {/* Main cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '24px' : '16px',
          height: isHovering ? '24px' : '16px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          transition: 'width 0.2s ease, height 0.2s ease, box-shadow 0.2s ease',
          boxShadow: isHovering 
            ? '0 0 12px rgba(79, 70, 229, 0.6), inset 0 0 6px rgba(255, 255, 255, 0.3)'
            : '0 0 4px rgba(79, 70, 229, 0.3), inset 0 0 3px rgba(255, 255, 255, 0.2)',
        }}
      />
    </>
  );
}
