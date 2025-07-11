import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  asLink?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  asLink = false,
  href,
  className,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md text-base font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variantClasses = {
    default: 'bg-[#111111] text-white hover:bg-[#111111]/90 dark:bg-white dark:text-black dark:hover:bg-white/90',
    outline: 'border border-neutral-200 dark:border-neutral-800 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/50 text-neutral-900 dark:text-neutral-100',
  };

  const all_classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (asLink) {
    return (
      <a href={href} className={`${all_classes} px-8 py-3`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={`${all_classes} px-8 py-3`} {...props}>
      {children}
    </button>
  );
};

export default Button;
