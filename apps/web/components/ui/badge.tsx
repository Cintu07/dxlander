import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-slate-950',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-gradient-to-r from-ocean-600 to-ocean-700 text-white shadow-md hover:shadow-lg hover:from-ocean-700 hover:to-ocean-800 dark:from-ocean-500 dark:to-ocean-400',
        secondary:
          'border-ocean-200/60 bg-ocean-50/80 text-ocean-700 hover:bg-ocean-100/80 hover:border-ocean-300/60 backdrop-blur-sm dark:border-ocean-800/60 dark:bg-ocean-900/40 dark:text-ocean-100 dark:hover:bg-ocean-900/60',
        destructive:
          'border-transparent bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:from-red-600 hover:to-red-700 dark:from-red-600 dark:to-red-500',
        outline:
          'border-ocean-300 text-ocean-700 hover:bg-ocean-50/50 dark:border-ocean-800 dark:text-ocean-100 dark:hover:bg-ocean-900/60',
        success:
          'border-transparent bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md hover:from-green-600 hover:to-green-700 dark:from-green-600 dark:to-green-500',
        warning:
          'border-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-md hover:from-yellow-600 hover:to-yellow-700 dark:from-yellow-500 dark:to-amber-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
