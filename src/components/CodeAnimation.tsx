import React from 'react';

interface CodeAnimationProps {
  className?: string;
}

const CodeAnimation: React.FC<CodeAnimationProps> = ({ className = "" }) => {
  const codeLines = [
    "const defy = () => {",
    "  return solutions.map(idea =>",
    "    ai.enhance(idea)",
    "  ).filter(result =>", 
    "    result.performance > 'excellent'",
    "  );",
    "};",
    "",
    "// Transform your business",
    "const growth = defy();"
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className="text-defy-primary font-mono text-sm animate-code-flow"
            style={{
              position: 'absolute',
              top: `${10 + index * 8}%`,
              left: `${5 + (index % 3) * 30}%`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeAnimation;