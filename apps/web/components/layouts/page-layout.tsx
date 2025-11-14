import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  background?: 'default' | 'ocean' | 'gradient';
  container?: boolean;
}

const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ className, children, background = 'default', container = true, ...props }, ref) => {
    const backgroundClasses = {
      default: 'bg-background text-foreground dark:bg-slate-950',
      ocean:
        'bg-gradient-to-br from-background via-ocean-50/20 to-ocean-100/40 text-foreground dark:from-slate-950 dark:via-ocean-900/20 dark:to-slate-900',
      gradient:
        'bg-gradient-to-br from-background via-ocean-50/30 to-ocean-200/20 text-foreground dark:from-slate-950 dark:via-ocean-900/30 dark:to-ocean-800/30',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'min-h-screen relative overflow-hidden',
          backgroundClasses[background],
          className
        )}
        {...props}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.6),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl dark:bg-ocean-500/20" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ocean-600/10 rounded-full blur-3xl dark:bg-ocean-600/25" />

        {/* Content */}
        <div className="relative z-10">
          {container ? <div className="container mx-auto px-6">{children}</div> : children}
        </div>
      </div>
    );
  }
);
PageLayout.displayName = 'PageLayout';

export { PageLayout };
