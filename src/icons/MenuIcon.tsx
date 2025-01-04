import { twMerge } from 'tailwind-merge';
import type { IconProps } from '../constants/icons';
import { ICON_DEFAULT_CLASSNAME } from '../constants/icons';

export default function MenuIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 6l16 0' />
      <path d='M4 12l16 0' />
      <path d='M4 18l16 0' />
    </svg>
  );
}
