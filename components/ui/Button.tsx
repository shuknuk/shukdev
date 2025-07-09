
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({ className, variant = 'default', children, asChild = false, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    default: "bg-blue-600 text-primary-foreground hover:bg-blue-600/90",
    outline: "border border-blue-500 bg-transparent hover:bg-blue-500/10 hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className || ''}`;

  const Comp = asChild ? 'span' : 'button';

  return (
    <Comp className={combinedClasses} {...props}>
      {children}
    </Comp>
  );
};

export default Button;
