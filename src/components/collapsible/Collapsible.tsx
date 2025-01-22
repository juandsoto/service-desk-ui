import { useRef, useState, useEffect } from 'react';
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
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight || 0);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={twMerge('bg-light', className)} {...props}>
      <button
        {...headerProps}
        disabled={!children}
        onClick={onToggle}
        className={twMerge('flex items-center justify-between w-full text-left py-2', headerProps?.className)}>
        {header}
        {children && (
          <ChevronDownIcon className={twMerge(`transition-transform duration-300`, isOpen ? 'rotate-180' : '')} />
        )}
      </button>

      {children && (
        <div ref={contentRef} style={{ height: `${height}px` }} className='overflow-hidden transition-all duration-300'>
          <div {...contentProps} className={twMerge('pt-2 pb-4', contentProps?.className)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
