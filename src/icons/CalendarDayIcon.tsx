import { ICON_DEFAULT_CLASSNAME, IconProps } from '../constants/icons';
import { twMerge } from 'tailwind-merge';

export default function CalendarDayIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 37 36`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M28.8 3.6V4.1H29.3H32.9C33.7222 4.1 34.5107 4.42661 35.092 5.00797C35.6734 5.58933 36 6.37783 36 7.2V10.3H1V7.2C1 6.37783 1.32661 5.58933 1.90797 5.00797C2.48933 4.42661 3.27783 4.1 4.1 4.1H7.7H8.2V3.6V1.8C8.2 1.45522 8.33696 1.12456 8.58076 0.880761C8.82456 0.636964 9.15522 0.5 9.5 0.5C9.84478 0.5 10.1754 0.636964 10.4192 0.880761C10.663 1.12456 10.8 1.45522 10.8 1.8V3.6V4.1H11.3H16.7H17.2V3.6V1.8C17.2 1.45522 17.337 1.12456 17.5808 0.880762C17.8246 0.636964 18.1552 0.5 18.5 0.5C18.8448 0.5 19.1754 0.636964 19.4192 0.880761C19.663 1.12456 19.8 1.45522 19.8 1.8V3.6V4.1H20.3H25.7H26.2V3.6V1.8C26.2 1.45522 26.337 1.12456 26.5808 0.880762C26.8246 0.636964 27.1552 0.5 27.5 0.5C27.8448 0.5 28.1754 0.636964 28.4192 0.880761C28.663 1.12456 28.8 1.45522 28.8 1.8V3.6ZM1.90797 34.592C1.32661 34.0107 1 33.2222 1 32.4V14.9H36V32.4C36 33.2222 35.6734 34.0107 35.092 34.592C34.5107 35.1734 33.7222 35.5 32.9 35.5H4.1C3.27783 35.5 2.48933 35.1734 1.90797 34.592ZM27.5 17.5H9.5C8.89 17.5 8.30499 17.7423 7.87366 18.1737C7.44232 18.605 7.2 19.19 7.2 19.8C7.2 20.41 7.44232 20.995 7.87365 21.4263C8.30499 21.8577 8.89 22.1 9.5 22.1H27.5C28.11 22.1 28.695 21.8577 29.1263 21.4263C29.5577 20.995 29.8 20.41 29.8 19.8C29.8 19.19 29.5577 18.605 29.1263 18.1737C28.695 17.7423 28.11 17.5 27.5 17.5Z'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  );
}