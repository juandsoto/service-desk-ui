import { ICON_DEFAULT_CLASSNAME, IconProps } from '../constants/icons';
import { twMerge } from 'tailwind-merge';

export default function LockIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 32 36`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M24.5 12.6V13.1H25H28C28.9443 13.1 29.8406 13.4381 30.4939 14.0261C31.1455 14.6125 31.5 15.3958 31.5 16.2V32.4C31.5 33.2042 31.1455 33.9875 30.4939 34.5739C29.8406 35.1619 28.9443 35.5 28 35.5H4C3.05573 35.5 2.15937 35.1619 1.50606 34.5739C0.854478 33.9875 0.5 33.2042 0.5 32.4V16.2C0.5 15.3958 0.854478 14.6125 1.50605 14.0261C2.15937 13.4381 3.05573 13.1 4 13.1H7H7.5V12.6V8.1C7.5 6.10237 8.38126 4.17442 9.97052 2.74408C11.5615 1.31218 13.7297 0.5 16 0.5C18.2703 0.5 20.4385 1.31218 22.0295 2.74408C23.6187 4.17442 24.5 6.10237 24.5 8.1V12.6ZM21 13.1H21.5V12.6V8.1C21.5 6.7559 20.9063 5.479 19.87 4.54637C18.8355 3.61531 17.4427 3.1 16 3.1C14.5573 3.1 13.1645 3.61531 12.13 4.54637C11.0937 5.479 10.5 6.7559 10.5 8.1V12.6V13.1H11H21ZM17.7487 28.6444C18.2223 28.2182 18.5 27.628 18.5 27V21.6C18.5 20.972 18.2223 20.3818 17.7487 19.9556C17.2768 19.5308 16.647 19.3 16 19.3C15.353 19.3 14.7232 19.5308 14.2513 19.9556C13.7777 20.3818 13.5 20.972 13.5 21.6V27C13.5 27.628 13.7777 28.2182 14.2513 28.6444C14.7232 29.0692 15.353 29.3 16 29.3C16.647 29.3 17.2768 29.0692 17.7487 28.6444Z'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  );
}
