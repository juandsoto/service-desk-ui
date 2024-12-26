import { ICON_DEFAULT_CLASSNAME, IconProps } from '../constants/icons';
import { twMerge } from 'tailwind-merge';

export default function UserIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 48 48`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M33.1923 13.4737C33.1923 18.419 29.0876 22.4474 24 22.4474C18.9124 22.4474 14.8077 18.419 14.8077 13.4737C14.8077 8.52835 18.9124 4.5 24 4.5C29.0876 4.5 33.1923 8.52835 33.1923 13.4737ZM13.5075 28.497C15.4319 26.616 18.0435 25.5558 20.7698 25.5526H27.2302C29.9565 25.5558 32.5681 26.616 34.4925 28.497C36.4165 30.3776 37.4967 32.925 37.5 35.5796V41.8947C37.5 42.3168 37.3286 42.7239 37.0197 43.0258C36.7103 43.3282 36.2884 43.5 35.8462 43.5H12.1538C11.7116 43.5 11.2897 43.3282 10.9803 43.0258C10.6714 42.7239 10.5 42.3168 10.5 41.8947V35.5792C10.5033 32.9248 11.5835 30.3775 13.5075 28.497Z'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  );
}
