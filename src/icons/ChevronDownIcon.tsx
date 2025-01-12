import { twMerge } from 'tailwind-merge';
import type { IconProps } from './constants';
import { ICON_DEFAULT_CLASSNAME } from './constants';

export default function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 17 10`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.56015 9.63261C8.44968 9.63395 8.34015 9.61217 8.23861 9.56865C8.13707 9.52513 8.04575 9.46084 7.97054 9.37992L0.389895 1.79927C0.0529776 1.46235 0.0529776 0.940131 0.389895 0.603213C0.726813 0.266296 1.24903 0.266296 1.58595 0.603213L8.57699 7.59425L15.5512 0.620059C15.8881 0.283141 16.4103 0.283141 16.7472 0.620059C17.0842 0.956977 17.0842 1.4792 16.7472 1.81612L9.1666 9.39676C8.99814 9.56522 8.77915 9.64945 8.57699 9.64945L8.56015 9.63261Z'
        fill='currentColor'
      />
    </svg>
  );
}
