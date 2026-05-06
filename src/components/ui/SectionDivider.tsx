interface SectionDividerProps {
  className?: string;
  light?: boolean;
}

export function SectionDivider({ className = '', light = false }: SectionDividerProps) {
  const color = light ? 'text-gold-300' : 'text-gold-600';
  const lineColor = light
    ? 'from-transparent to-gold-300/50'
    : 'from-transparent to-gold-600/40';

  return (
    <div className={`flex items-center justify-center gap-4 py-2 ${className}`}>
      <div className={`h-px w-16 bg-gradient-to-r ${lineColor}`} />
      <svg width="14" height="14" viewBox="0 0 16 16" className={color}>
        <rect x="4" y="4" width="8" height="8" transform="rotate(45 8 8)" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <div className={`h-px w-16 bg-gradient-to-l ${lineColor}`} />
    </div>
  );
}
