import { ICON_DEFAULT_CLASSNAME, IconProps } from '../constants/icons';
import { twMerge } from 'tailwind-merge';

export default function AudioIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox='0 0 32 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14.5 32V31.5H14H12.0005C8.95131 31.497 6.02788 30.2843 3.87178 28.1282C1.71573 25.9722 0.503107 23.0488 0.5 19.9997V14C0.5 13.6022 0.658036 13.2206 0.93934 12.9393C1.22065 12.658 1.60218 12.5 2 12.5C2.39782 12.5 2.77936 12.658 3.06066 12.9393C3.34196 13.2206 3.5 13.6022 3.5 14V20C3.5 22.2543 4.39553 24.4163 5.98959 26.0104C7.58365 27.6045 9.74566 28.5 12 28.5H20C22.2543 28.5 24.4163 27.6045 26.0104 26.0104C27.6045 24.4163 28.5 22.2543 28.5 20V14C28.5 13.6022 28.658 13.2206 28.9393 12.9393C29.2206 12.658 29.6022 12.5 30 12.5C30.3978 12.5 30.7794 12.658 31.0607 12.9393C31.342 13.2206 31.5 13.6022 31.5 14V19.9995C31.497 23.0487 30.2843 25.9721 28.1282 28.1282C25.9721 30.2843 23.0487 31.497 19.9995 31.5H18H17.5V32V36V36.5H18H22C22.3978 36.5 22.7794 36.658 23.0607 36.9393C23.342 37.2206 23.5 37.6022 23.5 38C23.5 38.3978 23.342 38.7794 23.0607 39.0607C22.7794 39.342 22.3978 39.5 22 39.5H10C9.60217 39.5 9.22064 39.342 8.93934 39.0607C8.65804 38.7794 8.5 38.3978 8.5 38C8.5 37.6022 8.65804 37.2206 8.93934 36.9393C9.22064 36.658 9.60217 36.5 10 36.5H14H14.5V36V32ZM14 0.5H18C22.1421 0.5 25.5 3.85786 25.5 8V18C25.5 22.1421 22.1421 25.5 18 25.5H14C9.85786 25.5 6.5 22.1421 6.5 18V8C6.5 3.85786 9.85786 0.5 14 0.5Z'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  );
}