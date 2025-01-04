import { twMerge } from 'tailwind-merge';
import type { IconProps } from '../constants/icons';
import { ICON_DEFAULT_CLASSNAME } from '../constants/icons';

export default function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 26 26`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13 2.34102C16.4734 2.34102 16.8848 2.35625 18.2508 2.41719C19.5203 2.47305 20.2059 2.68633 20.6629 2.86406C21.2672 3.09766 21.7039 3.38203 22.1559 3.83398C22.6129 4.29102 22.8922 4.72266 23.1258 5.32695C23.3035 5.78398 23.5168 6.47461 23.5727 7.73906C23.6336 9.11016 23.6488 9.52149 23.6488 12.9898C23.6488 16.4633 23.6336 16.8746 23.5727 18.2406C23.5168 19.5102 23.3035 20.1957 23.1258 20.6527C22.8922 21.257 22.6078 21.6938 22.1559 22.1457C21.6988 22.6027 21.2672 22.882 20.6629 23.1156C20.2059 23.2934 19.5152 23.5066 18.2508 23.5625C16.8797 23.6234 16.4684 23.6387 13 23.6387C9.52656 23.6387 9.11524 23.6234 7.74922 23.5625C6.47969 23.5066 5.79414 23.2934 5.33711 23.1156C4.73281 22.882 4.29609 22.5977 3.84414 22.1457C3.38711 21.6887 3.10781 21.257 2.87422 20.6527C2.69648 20.1957 2.4832 19.5051 2.42734 18.2406C2.36641 16.8695 2.35117 16.4582 2.35117 12.9898C2.35117 9.51641 2.36641 9.10508 2.42734 7.73906C2.4832 6.46953 2.69648 5.78398 2.87422 5.32695C3.10781 4.72266 3.39219 4.28594 3.84414 3.83398C4.30117 3.37695 4.73281 3.09766 5.33711 2.86406C5.79414 2.68633 6.48477 2.47305 7.74922 2.41719C9.11524 2.35625 9.52656 2.34102 13 2.34102ZM13 0C9.4707 0 9.02891 0.0152344 7.64258 0.0761719C6.26133 0.137109 5.31172 0.360547 4.48906 0.680469C3.63086 1.01562 2.90469 1.45742 2.18359 2.18359C1.45742 2.90469 1.01563 3.63086 0.680469 4.48398C0.360547 5.31172 0.137109 6.25625 0.0761719 7.6375C0.0152344 9.02891 0 9.4707 0 13C0 16.5293 0.0152344 16.9711 0.0761719 18.3574C0.137109 19.7387 0.360547 20.6883 0.680469 21.5109C1.01563 22.3691 1.45742 23.0953 2.18359 23.8164C2.90469 24.5375 3.63086 24.9844 4.48398 25.3145C5.31172 25.6344 6.25625 25.8578 7.6375 25.9188C9.02383 25.9797 9.46563 25.9949 12.9949 25.9949C16.5242 25.9949 16.966 25.9797 18.3523 25.9188C19.7336 25.8578 20.6832 25.6344 21.5059 25.3145C22.359 24.9844 23.0852 24.5375 23.8063 23.8164C24.5273 23.0953 24.9742 22.3691 25.3043 21.516C25.6242 20.6883 25.8477 19.7438 25.9086 18.3625C25.9695 16.9762 25.9848 16.5344 25.9848 13.0051C25.9848 9.47578 25.9695 9.03399 25.9086 7.64766C25.8477 6.26641 25.6242 5.3168 25.3043 4.49414C24.9844 3.63086 24.5426 2.90469 23.8164 2.18359C23.0953 1.4625 22.3691 1.01562 21.516 0.685547C20.6883 0.365625 19.7438 0.142188 18.3625 0.08125C16.9711 0.0152344 16.5293 0 13 0Z'
        fill='currentColor'
      />
      <path
        d='M13 6.32227C9.31328 6.32227 6.32227 9.31328 6.32227 13C6.32227 16.6867 9.31328 19.6777 13 19.6777C16.6867 19.6777 19.6777 16.6867 19.6777 13C19.6777 9.31328 16.6867 6.32227 13 6.32227ZM13 17.3316C10.6082 17.3316 8.66836 15.3918 8.66836 13C8.66836 10.6082 10.6082 8.66836 13 8.66836C15.3918 8.66836 17.3316 10.6082 17.3316 13C17.3316 15.3918 15.3918 17.3316 13 17.3316Z'
        fill='currentColor'
      />
      <path
        d='M21.5008 6.05813C21.5008 6.92141 20.8 7.61712 19.9418 7.61712C19.0785 7.61712 18.3828 6.91634 18.3828 6.05813C18.3828 5.19485 19.0836 4.49915 19.9418 4.49915C20.8 4.49915 21.5008 5.19993 21.5008 6.05813Z'
        fill='currentColor'
      />
    </svg>
  );
}
