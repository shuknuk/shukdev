import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <div
      className={`inline-flex items-center rounded-lg border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
