import { twMerge } from 'tailwind-merge';
import type { InputProps } from './_types';

const variantClassName: Record<NonNullable<InputProps['variant']>, string> = {
  fill: 'bg-light border-light-700/40 outline-light-700/40',
  outline: 'bg-transparent border-light-700/40 outline-light-700/40',
};

export const Input: React.FC<InputProps> = ({
  containerClassName,
  labelClassName,
  label,
  variant = 'outline',
  ...props
}) => {
  return (
    <div className={twMerge('w-full space-y-2', containerClassName)}>
      <label htmlFor={props.id} className={twMerge('block w-fit', labelClassName)}>
        {label}
      </label>
      <input
        {...props}
        className={twMerge(
          'w-full px-4 py-2 border rounded-md outline-offset-4',
          variantClassName[variant],
          props.className,
        )}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};
