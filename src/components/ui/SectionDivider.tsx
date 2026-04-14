interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 py-2 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-600/50" />
      <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold-600">
        <rect x="4" y="4" width="8" height="8" transform="rotate(45 8 8)" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-600/50" />
    </div>
  );
}
