import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
  overlayColor?: string;
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.15,
  overlay = true,
  overlayColor = 'from-stone-950/80 via-stone-950/30 to-transparent',
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
      />
      {overlay && (
        <div className={`absolute inset-0 bg-gradient-to-t ${overlayColor}`} />
      )}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />
    </div>
  );
}
