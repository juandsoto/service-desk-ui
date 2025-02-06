import { twMerge } from 'tailwind-merge';
import type { TextareaProps } from './_types';

const variantClassName: Record<NonNullable<TextareaProps['variant']>, string> = {
  fill: 'bg-light border-light-700/40 outline-light-700/40',
  outline: 'bg-transparent border-light-700/40 outline-light-700/40',
};

export const Textarea: React.FC<TextareaProps> = ({
  id,
  containerClassName,
  labelClassName,
  label,
  variant = 'outline',
  error = '',
  actions,
  ...props
}) => {
  return (
    <div className={twMerge('w-full space-y-2', containerClassName)}>
      <div className='flex items-center justify-between gap-4'>
        {label && (
          <label htmlFor={id} className={twMerge('block w-fit', labelClassName)}>
            {label}
          </label>
        )}
        {actions}
      </div>
      <textarea
        {...props}
        className={twMerge(
          'w-full min-h-24 px-4 py-2 bg-light-500 border border-light-700/40 rounded-md outline-light-700 outline-offset-4',
          variantClassName[variant],
          props.className,
        )}
        id={id}
        placeholder={props.placeholder}
      />
      <span id={`${id}-error`} className='block mt-2 text-error transition-opacity'>
        {error}
      </span>
    </div>
  );
};
