'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger children that have the `data-reveal-child` attribute */
  stagger?: number;
  /** Delay before this element reveals, in ms */
  delay?: number;
  as?: ElementType;
}

/**
 * Wraps content and reveals it with a soft fade-up when scrolled into view.
 * Respects prefers-reduced-motion via globals.css.
 */
export function Reveal({
  children,
  className,
  stagger = 0,
  delay = 0,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (stagger > 0) {
      const children = el.querySelectorAll<HTMLElement>('[data-reveal-child]');
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * stagger}ms`;
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  const Component = Tag;

  return (
    <Component
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn('reveal', visible && 'is-visible', className)}
    >
      {children}
    </Component>
  );
}
