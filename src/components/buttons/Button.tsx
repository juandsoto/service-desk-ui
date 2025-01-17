import { twMerge } from 'tailwind-merge';
import Icon from '../Icon';
import type { ButtonProps } from './_types';

const VARIANT_CLASSNAME: Record<NonNullable<ButtonProps['variant']>, string> = {
  fill: 'bg-primary-500 focus:ring-primary-500 border border-primary-500',
  outline: 'bg-transparent focus:ring-primary-500 border border-primary-500 text-primary-500',
};

const VARIANT_ICON_CLASSNAME: Record<NonNullable<ButtonProps['variant']>, string> = {
  fill: 'text-light',
  outline: 'text-primary-500',
};

const SIZE_CLASSNAME: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'py-1 px-4 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-6 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  loading = false,
  disabled,
  className,
  unstyled = false,
  variant = 'fill',
  size = 'md',
  children,
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={
        unstyled
          ? className
          : twMerge(
              'relative block text-light w-full rounded-lg focus:ring-1 ring-offset-1 disabled:cursor-not-allowed',
              VARIANT_CLASSNAME[variant],
              SIZE_CLASSNAME[size],
              className,
            )
      }
      type='button'
      {...props}>
      {loading && (
        <div className='absolute bg-inherit top-0 left-0 w-full h-full rounded-lg flex items-center justify-center'>
          <Icon className={twMerge('w-6 text-light', VARIANT_ICON_CLASSNAME[variant])} name='loader' />
        </div>
      )}
      {children}
    </button>
  );
};
