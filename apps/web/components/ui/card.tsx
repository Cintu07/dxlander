import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'rounded-2xl border-2 bg-card text-foreground shadow-xl transition-all duration-300 ease-out border-border/60 dark:bg-slate-950/80 dark:text-slate-100 dark:border-slate-800/70',
  {
    variants: {
      variant: {
        default:
          'shadow-lg shadow-ocean-500/5 hover:shadow-xl hover:shadow-ocean-500/10 hover:border-border',
        interactive:
          'shadow-ocean-500/10 hover:shadow-2xl hover:shadow-ocean-500/25 hover:border-ocean-400/70 hover:scale-[1.02] cursor-pointer',
        elevated:
          'border-ocean-300/50 bg-ocean-50/30 shadow-2xl shadow-ocean-500/15 hover:shadow-3xl hover:shadow-ocean-500/25 hover:border-ocean-400/60 dark:bg-slate-900/60 dark:border-ocean-900/40',
        glass:
          'border-white/25 bg-white/15 backdrop-blur-xl shadow-2xl shadow-ocean-500/10 hover:bg-white/20 dark:border-slate-800/60 dark:bg-slate-950/40 dark:hover:bg-slate-900/50',
        gradient:
          'border-ocean-300/50 bg-ocean-50/50 shadow-2xl shadow-ocean-500/15 hover:shadow-3xl hover:shadow-ocean-500/25 dark:bg-ocean-900/40 dark:border-ocean-800/50',
        disabled:
          'border-gray-200 bg-gray-50/80 shadow-sm cursor-not-allowed opacity-60 dark:border-slate-800 dark:bg-slate-900/40',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, className }))} {...props} />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
