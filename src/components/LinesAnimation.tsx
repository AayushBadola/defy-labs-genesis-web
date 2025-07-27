import React from 'react';

interface LinesAnimationProps {
  className?: string;
}

const LinesAnimation: React.FC<LinesAnimationProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Horizontal Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-defy-primary/20 to-transparent animate-lines"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-defy-secondary/20 to-transparent animate-lines" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-defy-primary/20 to-transparent animate-lines" style={{ animationDelay: '2s' }}></div>
      
      {/* Vertical Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-defy-secondary/20 to-transparent animate-lines" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-defy-primary/20 to-transparent animate-lines" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Diagonal Lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full animate-lines" style={{ animationDelay: '0.8s' }}>
          <line 
            x1="0%" y1="0%" x2="100%" y2="100%" 
            stroke="hsl(var(--defy-primary) / 0.1)" 
            strokeWidth="1"
            className="animate-shimmer"
          />
          <line 
            x1="100%" y1="0%" x2="0%" y2="100%" 
            stroke="hsl(var(--defy-secondary) / 0.1)" 
            strokeWidth="1"
            className="animate-shimmer"
            style={{ animationDelay: '1.2s' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default LinesAnimation;