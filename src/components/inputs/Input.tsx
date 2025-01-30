import { twMerge } from 'tailwind-merge';
import type { InputProps } from './_types';

const variantClassName: Record<NonNullable<InputProps['variant']>, string> = {
  fill: 'bg-light border-light-700/40 outline-light-700/40',
  outline: 'bg-transparent border-light-700/40 outline-light-700/40',
};

export const Input: React.FC<InputProps> = ({
  id,
  containerClassName,
  labelClassName,
  label,
  variant = 'outline',
  actions,
  rightAction,
  error = '',
  ...props
}) => {
  return (
    <div className={twMerge('w-full', containerClassName)}>
      <div className='flex items-center justify-between gap-4 mb-2'>
        {label && (
          <label htmlFor={id} className={twMerge('block w-fit', labelClassName)}>
            {label}
          </label>
        )}
        {actions}
      </div>
      <div className='flex items-stretch gap-2'>
        <input
          {...props}
          className={twMerge(
            'flex-1 px-4 py-2 border rounded-md outline-offset-4',
            variantClassName[variant],
            props.className,
          )}
          type={props.type}
          id={id}
          placeholder={props.placeholder}
        />
        {rightAction}
      </div>
      <span id={`${id}-error`} className='block mt-2 text-error transition-opacity'>
        {error}
      </span>
    </div>
  );
};
