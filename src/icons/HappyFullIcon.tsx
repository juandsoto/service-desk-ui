import { twMerge } from 'tailwind-merge';
import type { IconProps } from './constants';
import { ICON_DEFAULT_CLASSNAME } from './constants';

export default function HappyFullIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.19 21.5H8.58957L8.69826 22.0905C9.683 27.4407 14.3617 31.5 20 31.5C25.6383 31.5 30.317 27.4407 31.3017 22.0905L31.4104 21.5H30.81H9.19ZM0.5 20C0.5 9.24814 9.24814 0.5 20 0.5C30.7519 0.5 39.5 9.24814 39.5 20C39.5 30.7519 30.7519 39.5 20 39.5C9.24814 39.5 0.5 30.7519 0.5 20ZM30.5 15C30.5 13.0679 28.9321 11.5 27 11.5C25.0679 11.5 23.5 13.0679 23.5 15C23.5 16.9321 25.0679 18.5 27 18.5C28.9321 18.5 30.5 16.9321 30.5 15ZM16.5 15C16.5 13.0679 14.9321 11.5 13 11.5C11.0679 11.5 9.5 13.0679 9.5 15C9.5 16.9321 11.0679 18.5 13 18.5C14.9321 18.5 16.5 16.9321 16.5 15Z'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  );
}
