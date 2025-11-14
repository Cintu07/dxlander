import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const sectionVariants = cva('relative text-foreground', {
  variants: {
    variant: {
      default: '',
      centered: 'text-center',
      hero: 'text-center py-20',
      compact: 'py-8',
    },
    spacing: {
      none: '',
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16',
      xl: 'py-20',
    },
    background: {
      transparent: '',
      subtle: 'bg-ocean-50/20 dark:bg-slate-900/60',
      card: 'bg-card/90 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg dark:bg-slate-950/70 dark:border-slate-800/60',
      gradient:
        'bg-gradient-to-r from-ocean-50/30 to-ocean-100/20 dark:from-slate-900/70 dark:to-ocean-900/40',
    },
  },
  defaultVariants: {
    variant: 'default',
    spacing: 'md',
    background: 'transparent',
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  children: React.ReactNode;
  container?: boolean;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, variant, spacing, background, children, container = true, ...props }, ref) => {
    const content = container ? <div className="container mx-auto px-6">{children}</div> : children;

    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ variant, spacing, background, className }))}
        {...props}
      >
        {content}
      </section>
    );
  }
);
Section.displayName = 'Section';

export { Section, sectionVariants };
