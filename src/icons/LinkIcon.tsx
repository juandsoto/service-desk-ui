import { twMerge } from 'tailwind-merge';
import type { IconProps } from '../constants/icons';
import { ICON_DEFAULT_CLASSNAME } from '../constants/icons';

export default function LinkIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 14 14`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.6222 8.06667V11.5035C11.6223 11.6125 11.6009 11.7204 11.5592 11.8212C11.5175 11.9219 11.4564 12.0134 11.3793 12.0905C11.3022 12.1676 11.2107 12.2287 11.11 12.2704C11.0093 12.312 10.9013 12.3334 10.7923 12.3333H2.49649C2.38749 12.3334 2.27953 12.312 2.17881 12.2704C2.07808 12.2287 1.98656 12.1676 1.90948 12.0905C1.8324 12.0134 1.77128 11.9219 1.72961 11.8212C1.68793 11.7204 1.66653 11.6125 1.66663 11.5035V3.20765C1.66653 3.09864 1.68793 2.99069 1.72961 2.88996C1.77128 2.78924 1.8324 2.69772 1.90948 2.62064C1.98656 2.54356 2.07808 2.48243 2.17881 2.44076C2.27953 2.39909 2.38749 2.37769 2.49649 2.37778H5.7804M8.2316 1.66667H12.3333V5.76836M6.72334 7.27663L12.2544 1.74561'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
