import { twMerge } from 'tailwind-merge';
import type { IconProps } from '../constants/icons';
import { ICON_DEFAULT_CLASSNAME } from '../constants/icons';

export default function InfoIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 40 40`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.16639 3.78634C12.3731 1.64371 16.1431 0.500055 19.9997 0.5C25.1698 0.505749 30.1264 2.56208 33.7822 6.21785C37.438 9.87368 39.4943 14.8304 39.5 20.0005C39.4999 23.8571 38.3562 27.627 36.2137 30.8336C34.071 34.0404 31.0255 36.5397 27.4623 38.0156C23.8992 39.4916 19.9784 39.8777 16.1957 39.1253C12.4131 38.3729 8.93855 36.5157 6.21143 33.7886C3.4843 31.0614 1.62711 27.5869 0.874696 23.8043C0.122284 20.0216 0.508449 16.1008 1.98436 12.5377C3.46027 8.97451 5.95963 5.92903 9.16639 3.78634ZM20.9445 8.08985C20.3689 7.70527 19.6922 7.5 19 7.5C18.0717 7.5 17.1815 7.86875 16.5251 8.52512C15.8688 9.1815 15.5 10.0717 15.5 11C15.5 11.6922 15.7053 12.3689 16.0899 12.9445C16.4744 13.5201 17.0211 13.9687 17.6606 14.2336C18.3002 14.4985 19.0039 14.5678 19.6828 14.4327C20.3618 14.2977 20.9854 13.9644 21.4749 13.4749C21.9644 12.9854 22.2977 12.3617 22.4328 11.6828C22.5678 11.0039 22.4985 10.3001 22.2336 9.66061C21.9687 9.02106 21.5201 8.47444 20.9445 8.08985ZM14.2322 29.7678C14.7011 30.2366 15.337 30.5 16 30.5H24C24.663 30.5 25.2989 30.2366 25.7678 29.7678C26.2366 29.2989 26.5 28.663 26.5 28C26.5 27.337 26.2366 26.7011 25.7678 26.2322C25.2989 25.7634 24.663 25.5 24 25.5H22.5V18C22.5 17.337 22.2366 16.7011 21.7678 16.2322C21.2989 15.7634 20.663 15.5 20 15.5H16C15.337 15.5 14.7011 15.7634 14.2322 16.2322C13.7634 16.7011 13.5 17.337 13.5 18C13.5 18.663 13.7634 19.2989 14.2322 19.7678C14.7011 20.2366 15.337 20.5 16 20.5H17.5V25.5H16C15.337 25.5 14.7011 25.7634 14.2322 26.2322C13.7634 26.7011 13.5 27.337 13.5 28C13.5 28.663 13.7634 29.2989 14.2322 29.7678Z'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  );
}
