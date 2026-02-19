import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-card-bg rounded-xl shadow-md border border-border ${
        hover ? 'hover:shadow-xl hover:border-accent/30 transition-all duration-300 transform hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
