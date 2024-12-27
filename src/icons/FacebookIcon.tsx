import { ICON_DEFAULT_CLASSNAME, IconProps } from '../constants/icons';
import { twMerge } from 'tailwind-merge';

export default function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 26 26`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M26 13C26 5.82029 20.1797 0 13 0C5.82029 0 0 5.82029 0 13C0 19.4886 4.75389 24.8668 10.9688 25.8421V16.7578H7.66797V13H10.9688V10.1359C10.9688 6.87781 12.9096 5.07812 15.879 5.07812C17.3009 5.07812 18.7891 5.33203 18.7891 5.33203V8.53125H17.1498C15.535 8.53125 15.0313 9.53342 15.0313 10.5625V13H18.6367L18.0604 16.7578H15.0313V25.8421C21.2461 24.8668 26 19.4886 26 13Z'
        fill='currentColor'
      />
    </svg>
  );
}