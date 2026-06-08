type AnimatedLogoProps = {
  className?: string;
};

export function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  return (
    <div
      className={`animated-logo relative aspect-[5.95/1] ${className}`}
      aria-label="Luis Fernando"
      role="img"
    >
      <span className="animated-logo__base" aria-hidden="true" />
      <span className="animated-logo__reveal" aria-hidden="true" />
      <span className="animated-logo__shine" aria-hidden="true" />
    </div>
  );
}
