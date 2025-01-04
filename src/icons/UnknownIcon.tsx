import { twMerge } from 'tailwind-merge';
import type { IconProps } from '../constants/icons';
import { ICON_DEFAULT_CLASSNAME } from '../constants/icons';

export default function UnknownIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 24 24`}
      fill='none'
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4' />
      <path d='M12 19l0 .01' />
    </svg>
  );
}
