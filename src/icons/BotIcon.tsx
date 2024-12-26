import { twMerge } from 'tailwind-merge';
import { ICON_DEFAULT_CLASSNAME, IconProps } from '../constants/icons';

type BotIconProps = {
  containerClassName?: HTMLDivElement['className'];
  showIndicator?: boolean;
};

export default function BotIcon({ containerClassName, className, showIndicator = false }: IconProps & BotIconProps) {
  return (
    <div
      className={twMerge(
        'bg-light rounded-full p-4 border sm:border-2 border-light-500',
        containerClassName,
        showIndicator ? 'bot-button-indicator' : '',
      )}>
      <svg
        className={twMerge(ICON_DEFAULT_CLASSNAME, 'w-12 text-primary-500', className)}
        viewBox='0 0 46 46'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M32.3479 4.30437H13.6522C8.49221 4.30437 4.30438 8.4735 4.30438 13.6148V24.7948V26.6644C4.30438 31.8057 8.49221 35.9748 13.6522 35.9748H16.4566C16.9613 35.9748 17.6344 36.3113 17.9522 36.7226L20.7566 40.4431C21.9905 42.0883 24.0096 42.0883 25.2435 40.4431L28.0479 36.7226C28.4031 36.2552 28.9639 35.9748 29.5435 35.9748H32.3479C37.5079 35.9748 41.6957 31.8057 41.6957 26.6644V13.6148C41.6957 8.4735 37.5079 4.30437 32.3479 4.30437ZM15.5218 23C14.4748 23 13.6522 22.1587 13.6522 21.1305C13.6522 20.1022 14.4935 19.2609 15.5218 19.2609C16.55 19.2609 17.3913 20.1022 17.3913 21.1305C17.3913 22.1587 16.5687 23 15.5218 23ZM23 23C21.9531 23 21.1305 22.1587 21.1305 21.1305C21.1305 20.1022 21.9718 19.2609 23 19.2609C24.0283 19.2609 24.8696 20.1022 24.8696 21.1305C24.8696 22.1587 24.047 23 23 23ZM30.4783 23C29.4313 23 28.6087 22.1587 28.6087 21.1305C28.6087 20.1022 29.45 19.2609 30.4783 19.2609C31.5066 19.2609 32.3479 20.1022 32.3479 21.1305C32.3479 22.1587 31.5253 23 30.4783 23Z'
          fill='currentColor'
        />
      </svg>
    </div>
  );
}
