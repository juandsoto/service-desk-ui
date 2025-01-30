import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronDownIcon } from '../../icons';

type CollapsibleProps = React.HTMLAttributes<HTMLDivElement> & {
  header: React.ReactNode;
  headerProps?: React.HTMLAttributes<HTMLButtonElement>;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

const Collapsible: React.FC<CollapsibleProps> = ({
  header,
  children,
  isOpen,
  onToggle,
  className,
  headerProps,
  contentProps,
  ...props
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [_, setAnimationState] = useState<'idle' | 'animating' | 'done'>('idle');

  useEffect(() => {
    const contentEl = contentRef.current;

    if (!contentEl) return;

    if (isOpen) {
      // Opening: Transition from 0px to scrollHeight
      contentEl.style.height = '0px'; // Start from 0
      contentEl.style.overflow = 'hidden';
      setAnimationState('animating');
      requestAnimationFrame(() => {
        contentEl.style.height = `${contentEl.scrollHeight}px`;
      });

      const onTransitionEnd = () => {
        contentEl.style.height = 'auto'; // Reset to auto for natural layout
        contentEl.style.overflow = 'visible';
        setAnimationState('done');
        contentEl.removeEventListener('transitionend', onTransitionEnd);
      };
      contentEl.addEventListener('transitionend', onTransitionEnd);
    } else {
      // Closing: Transition from current height to 0px
      contentEl.style.height = `${contentEl.scrollHeight}px`;
      requestAnimationFrame(() => {
        contentEl.style.height = '0px';
        contentEl.style.overflow = 'hidden';
        setAnimationState('animating');
      });
    }
  }, [isOpen]);

  return (
    <div className={twMerge('bg-light', className)} {...props}>
      <button
        {...headerProps}
        disabled={!children}
        onClick={onToggle}
        type='button'
        className={twMerge('flex items-center justify-between w-full text-left py-2', headerProps?.className)}>
        {header}
        {children && (
          <ChevronDownIcon className={twMerge(`transition-transform duration-300`, isOpen ? 'rotate-180' : '')} />
        )}
      </button>

      {children && (
        <div ref={contentRef} style={{ height: '0px' }} className='overflow-hidden transition-all duration-300'>
          <div {...contentProps} className={twMerge('pt-2 pb-4', contentProps?.className)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
