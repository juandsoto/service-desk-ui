import { twMerge } from 'tailwind-merge';
import type { IconProps } from './constants';
import { ICON_DEFAULT_CLASSNAME } from './constants';

export default function SearchIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      aria-hidden='true'
      viewBox={`0 0 20 20`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
      />
    </svg>
  );
}
