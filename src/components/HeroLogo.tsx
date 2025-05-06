import React from 'react';

interface HeroLogoProps {
  className?: string;
}

function HeroLogo({ className = "h-20" }: HeroLogoProps) {
  return (
    <div className="flex items-center">
      <img 
        src="/images/logo home.png" 
        alt="Anamcara Logo" 
        className={className}
      />
      <div className="ml-4">
        <h2 className="text-white text-xl md:text-2xl font-bold [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
          Anamcara Consulting and Services LLP
        </h2>
      </div>
    </div>
  );
}

export default HeroLogo;