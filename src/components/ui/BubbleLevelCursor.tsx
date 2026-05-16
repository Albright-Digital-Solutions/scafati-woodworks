import { useEffect, useRef, useState } from 'react';

export function BubbleLevelCursor() {
  const discRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const discPos = useRef({ x: -100, y: -100 });
  const animFrame = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    // Animation loop — disc trails bubble with spring easing
    const animate = () => {
      const ease = 0.12;
      const dx = mousePos.current.x - discPos.current.x;
      const dy = mousePos.current.y - discPos.current.y;

      discPos.current.x += dx * ease;
      discPos.current.y += dy * ease;

      if (bubbleRef.current) {
        bubbleRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`;
      }

      if (discRef.current) {
        discRef.current.style.transform = `translate(${discPos.current.x}px, ${discPos.current.y}px) translate(-50%, -50%)`;
      }

      animFrame.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animFrame.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animFrame.current);
    };
  }, [visible]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer disc — trails behind */}
      <div
        ref={discRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9998,
          pointerEvents: 'none',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer wood ring */}
          <circle cx="24" cy="24" r="22" fill="#8b5833" stroke="#5e3b27" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="19" fill="#a66f3d" />
          {/* Glass vial */}
          <circle cx="24" cy="24" r="14" fill="#d4f5d0" stroke="#5e3b27" strokeWidth="0.7" />
          {/* Guide rings */}
          <circle cx="24" cy="24" r="10" fill="none" stroke="#5e3b27" strokeWidth="0.35" opacity="0.45" />
          <circle cx="24" cy="24" r="6" fill="none" stroke="#5e3b27" strokeWidth="0.3" opacity="0.3" />
          {/* Crosshair ticks */}
          <line x1="24" y1="10" x2="24" y2="13" stroke="#5e3b27" strokeWidth="0.4" opacity="0.4" />
          <line x1="24" y1="35" x2="24" y2="38" stroke="#5e3b27" strokeWidth="0.4" opacity="0.4" />
          <line x1="10" y1="24" x2="13" y2="24" stroke="#5e3b27" strokeWidth="0.4" opacity="0.4" />
          <line x1="35" y1="24" x2="38" y2="24" stroke="#5e3b27" strokeWidth="0.4" opacity="0.4" />
        </svg>
      </div>

      {/* Bubble — fixed to cursor position */}
      <div
        ref={bubbleRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="6" fill="#44bb44" opacity="0.85" />
          <circle cx="6.5" cy="6.5" r="2" fill="white" opacity="0.4" />
        </svg>
      </div>
    </>
  );
}
