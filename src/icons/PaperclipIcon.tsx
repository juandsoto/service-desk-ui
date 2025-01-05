import { twMerge } from 'tailwind-merge';
import type { IconProps } from './constants';
import { ICON_DEFAULT_CLASSNAME } from './constants';

export default function PaperclipIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 25 27`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14.8033 8.4665L6.94233 16.0854C5.75873 17.2326 5.75873 19.0935 6.94233 20.2407V20.2407C8.12592 21.3878 10.046 21.3878 11.2296 20.2407L21.5925 10.1969C23.7634 8.09291 23.7634 4.68204 21.5925 2.57802V2.57802C19.4216 0.473995 15.9024 0.473995 13.7315 2.57802L3.36862 12.6218C0.21046 15.6827 0.21046 20.6434 3.36862 23.7043V23.7043C6.52678 26.7652 11.6452 26.7652 14.8033 23.7043L21.0924 17.6089'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
