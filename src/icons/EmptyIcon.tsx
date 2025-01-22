import { twMerge } from 'tailwind-merge';
import type { IconProps } from './constants';
import { ICON_DEFAULT_CLASSNAME } from './constants';

export default function EmptyIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z' />
      <path d='M17.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z' />
      <path d='M12 2a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z' />
    </svg>
  );
}
