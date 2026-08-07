'use client';

import { Fragment, type ElementType } from 'react';

interface SplitTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Delay before the first letter starts, in ms */
  delay?: number;
  /** Stagger between letters, in ms */
  stagger?: number;
  /** Delay before this element reveals, in ms */
  delay2?: number;
}

/**
 * Renders text with each character animating in one-by-one.
 * Words are kept intact (wrapped in spans) so they never break mid-word.
 */
export function SplitText({
  text,
  as: Tag = 'span',
  className,
  delay = 0,
  stagger = 28,
}: SplitTextProps) {
  const words = text.split(' ');

  let charIndex = 0;

  return (
    <Tag className={className}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, ci) => {
              const i = charIndex++;
              return (
                <span
                  key={ci}
                  className="animate-char"
                  style={{ animationDelay: `${delay + i * stagger}ms` }}
                >
                  {char}
                </span>
              );
            })}
          </span>
          {wi < words.length - 1 && (
            <span className="animate-char" style={{ animationDelay: `${delay + charIndex++ * stagger}ms` }}>
              {' '}
            </span>
          )}
        </Fragment>
      ))}
    </Tag>
  );
}
