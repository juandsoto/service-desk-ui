import { twMerge } from 'tailwind-merge';
import type { IconProps } from './constants';
import { ICON_DEFAULT_CLASSNAME } from './constants';

export default function EmptyIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox='0 0 32 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='' fill='currentColor' stroke='currentColor' />
    </svg>
  );
}
