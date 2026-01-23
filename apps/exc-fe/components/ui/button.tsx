"use client";

import * as React from "react";

const buttonVariants = {
  variant: {
    default: "bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40",
    primary: "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 text-white hover:opacity-90 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 animate-gradient bg-[length:200%_200%]",
    destructive: "bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 shadow-lg shadow-red-500/25",
    outline: "border border-zinc-700 bg-transparent hover:bg-zinc-800/50 hover:border-zinc-600 text-zinc-100",
    secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border border-zinc-700",
    ghost: "hover:bg-zinc-800/50 text-zinc-300 hover:text-zinc-100",
    link: "text-purple-400 underline-offset-4 hover:underline hover:text-purple-300",
    glow: "bg-zinc-900 text-white border border-purple-500/50 hover:border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]",
  },
  size: {
    default: "h-10 px-5 py-2",
    sm: "h-9 rounded-lg px-4 text-sm",
    lg: "h-12 rounded-xl px-8 text-base",
    xl: "h-14 rounded-xl px-10 text-lg",
    icon: "h-10 w-10",
  },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = buttonVariants.variant[variant];
    const sizeClasses = buttonVariants.size[size];
    
    return (
      <button
        className={`group relative inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 disabled:pointer-events-none disabled:opacity-50 ${variantClasses} ${sizeClasses} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
