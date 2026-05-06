import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  onComplete: () => void;
}

const PLANER_DURATION = 2.4;
const DOOR_DURATION = 1.4;

function PlanerSVG() {
  return (
    <svg width="210" height="90" viewBox="0 0 210 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9B6A3A" />
          <stop offset="60%" stopColor="#7A4E28" />
          <stop offset="100%" stopColor="#5C3A1A" />
        </linearGradient>
        <linearGradient id="soleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8A060" />
          <stop offset="100%" stopColor="#A07838" />
        </linearGradient>
      </defs>

      {/* Tote (rear handle — left side, plane faces right) */}
      <path d="M18 52 C14 35 28 18 38 22 L40 30 C32 28 26 38 28 52 Z" fill="#6B3A1A" stroke="#4a2818" strokeWidth="1" />
      <path d="M28 52 L40 52 L40 30 C34 28 28 36 28 52 Z" fill="#8B5030" />

      {/* Main body */}
      <rect x="12" y="44" width="178" height="28" rx="3" fill="url(#bodyGrad)" />
      {/* Wood grain lines on body */}
      <line x1="12" y1="50" x2="190" y2="50" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      <line x1="12" y1="56" x2="190" y2="56" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      <line x1="12" y1="62" x2="190" y2="62" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />

      {/* Front knob */}
      <ellipse cx="174" cy="46" rx="14" ry="16" fill="#6B3A1A" stroke="#4a2818" strokeWidth="1" />
      <ellipse cx="174" cy="46" rx="9" ry="11" fill="#8B5030" />

      {/* Blade / iron (protruding at mouth) */}
      <path d="M96 72 L108 72 L104 82 L100 82 Z" fill="#B8B8C0" stroke="#909098" strokeWidth="0.5" />
      <path d="M100 82 L104 82 L103 84 L101 84 Z" fill="#D0D0D8" />

      {/* Sole plate */}
      <rect x="12" y="72" width="178" height="5" rx="1" fill="url(#soleGrad)" />
      {/* Mouth opening */}
      <rect x="94" y="72" width="16" height="5" fill="#3a2010" />

      {/* Cap iron / chip breaker screw */}
      <circle cx="102" cy="55" r="4" fill="#888" stroke="#666" strokeWidth="0.5" />
      <line x1="102" y1="51" x2="102" y2="59" stroke="#555" strokeWidth="0.8" />
      <line x1="98" y1="55" x2="106" y2="55" stroke="#555" strokeWidth="0.8" />

      {/* Lever cap */}
      <path d="M80 44 Q102 40 124 44" stroke="#C8A060" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Shaving curl at blade mouth */}
      <motion.path
        d="M110 72 Q118 60 112 52 Q108 46 116 42 Q122 38 118 32"
        stroke="rgba(240,220,180,0.9)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3], pathLength: [0.6, 1, 0.6] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M113 70 Q122 58 115 50 Q110 44 118 40"
        stroke="rgba(255,235,195,0.6)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        animate={{ opacity: [0, 0.7, 0], pathLength: [0.4, 1, 0.4] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />
    </svg>
  );
}

const woodStyle: React.CSSProperties = {
  backgroundColor: '#0d0702',
  backgroundImage: [
    'repeating-linear-gradient(91.5deg, transparent 0px, transparent 4px, rgba(160,90,20,0.05) 4px, rgba(160,90,20,0.05) 6px, transparent 6px, transparent 14px)',
    'repeating-linear-gradient(88.5deg, rgba(0,0,0,0.25) 0px, transparent 2px, transparent 5px, rgba(100,50,10,0.07) 5px, transparent 8px)',
    'repeating-linear-gradient(90deg, transparent 0px, rgba(180,110,30,0.03) 20px, transparent 40px, rgba(0,0,0,0.08) 60px, transparent 80px)',
    'linear-gradient(180deg, #110904 0%, #1c1108 25%, #0e0804 50%, #1a0f07 75%, #130b05 100%)',
  ].join(', '),
};

export function IntroAnimation({ onComplete }: Props) {
  const [stage, setStage] = useState<'init' | 'planing' | 'pausing' | 'opening' | 'done'>('init');

  useEffect(() => {
    const t1 = setTimeout(() => setStage('planing'), 600);
    const t2 = setTimeout(() => setStage('pausing'), 600 + PLANER_DURATION * 1000 + 200);
    const t3 = setTimeout(() => setStage('opening'), 600 + PLANER_DURATION * 1000 + 1000);
    const t4 = setTimeout(() => {
      setStage('done');
      onComplete();
    }, 600 + PLANER_DURATION * 1000 + 1000 + DOOR_DURATION * 1000 + 200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  if (stage === 'done') return null;

  const isOpening = stage === 'opening';
  const isPlaning = stage === 'planing';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, overflow: 'hidden' }}>

      {/* ─── LEFT DOOR PANEL ─── */}
      <motion.div
        style={{
          position: 'absolute', left: 0, top: 0, width: '50.2%', height: '100%',
          ...woodStyle,
          boxShadow: 'inset -8px 0 24px rgba(0,0,0,0.5)',
        }}
        animate={isOpening ? { x: '-100%' } : { x: 0 }}
        transition={{ duration: DOOR_DURATION, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* ─── RIGHT DOOR PANEL ─── */}
      <motion.div
        style={{
          position: 'absolute', right: 0, top: 0, width: '50.2%', height: '100%',
          ...woodStyle,
          boxShadow: 'inset 8px 0 24px rgba(0,0,0,0.5)',
        }}
        animate={isOpening ? { x: '100%' } : { x: 0 }}
        transition={{ duration: DOOR_DURATION, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* ─── CENTER SEAM ─── */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            exit={{ scaleX: 0 }}
            style={{
              position: 'absolute', left: '50%', top: 0,
              transform: 'translateX(-50%)',
              width: '3px', height: '100%', zIndex: 2,
              background: 'linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
            }}
          />
        )}
      </AnimatePresence>

      {/* ─── GOLD DOOR EDGE TRIM ─── */}
      <AnimatePresence>
        {!isOpening && (
          <>
            <motion.div
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute', left: 'calc(50% - 2px)', top: '10%',
                width: '1px', height: '80%', zIndex: 3,
                background: 'linear-gradient(180deg, transparent, rgba(180,140,50,0.4) 20%, rgba(200,160,60,0.6) 50%, rgba(180,140,50,0.4) 80%, transparent)',
              }}
            />
            <motion.div
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute', left: 'calc(50% + 1px)', top: '10%',
                width: '1px', height: '80%', zIndex: 3,
                background: 'linear-gradient(180deg, transparent, rgba(180,140,50,0.4) 20%, rgba(200,160,60,0.6) 50%, rgba(180,140,50,0.4) 80%, transparent)',
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* ─── LOGO (revealed by planer clip-path) ─── */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex',
        alignItems: 'center', justifyContent: 'center', zIndex: 4, pointerEvents: 'none',
      }}>
        <motion.img
          src="/images/logo-dark.png"
          alt="Scafati Woodworks"
          style={{ width: 'min(380px, 55vw)', height: 'auto', filter: 'brightness(1.3) drop-shadow(0 0 30px rgba(180,140,60,0.3))' }}
          initial={{ clipPath: 'inset(0 102% 0 0)' }}
          animate={
            isPlaning || stage === 'pausing' || stage === 'opening'
              ? { clipPath: 'inset(0 0% 0 0)' }
              : { clipPath: 'inset(0 102% 0 0)' }
          }
          transition={isPlaning ? { duration: PLANER_DURATION, ease: 'linear' } : { duration: 0 }}
        />
      </div>

      {/* ─── LIGHT GLOW SWEEP (follows planer) ─── */}
      {isPlaning && (
        <motion.div
          style={{
            position: 'absolute', top: 0, width: '120px', height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(220,180,80,0.04) 40%, rgba(220,180,80,0.08) 50%, rgba(220,180,80,0.04) 60%, transparent)',
            zIndex: 3, pointerEvents: 'none',
          }}
          initial={{ x: '-120px' }}
          animate={{ x: 'calc(100vw + 120px)' }}
          transition={{ duration: PLANER_DURATION, ease: 'linear' }}
        />
      )}

      {/* ─── PLANER ─── */}
      <AnimatePresence>
        {(stage === 'init' || isPlaning) && (
          <motion.div
            style={{
              position: 'absolute', top: '50%', zIndex: 5, pointerEvents: 'none',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.8))',
            }}
            initial={{ x: '-230px', y: '-50%' }}
            animate={isPlaning ? { x: 'calc(100vw + 60px)', y: '-50%' } : { x: '-230px', y: '-50%' }}
            transition={isPlaning ? { duration: PLANER_DURATION, ease: 'linear' } : { duration: 0 }}
            exit={{ opacity: 0 }}
          >
            <PlanerSVG />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── DUST PARTICLES (scattered fixed positions) ─── */}
      {isPlaning && (
        <>
          {[
            { left: '15%', delay: 0.3 }, { left: '28%', delay: 0.6 },
            { left: '42%', delay: 1.0 }, { left: '58%', delay: 1.4 },
            { left: '70%', delay: 1.7 }, { left: '83%', delay: 2.0 },
          ].map((p, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute', bottom: '50%', left: p.left,
                width: '4px', height: '4px', borderRadius: '50%',
                background: 'rgba(220,190,120,0.7)', zIndex: 5, pointerEvents: 'none',
              }}
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ opacity: [0, 0.8, 0], y: [-10, -40], x: [0, 8] }}
              transition={{ duration: 0.7, delay: p.delay, ease: 'easeOut' }}
            />
          ))}
        </>
      )}
    </div>
  );
}
