import { twMerge } from 'tailwind-merge';
import { BotIcon } from '../../icons';
import { formatTime } from '../../utils/dates';

type Message = {
  text?: string;
  options?: string[];
};

type MessageProps = {
  type: 'bot' | 'user';
  time: Date;
  messages: Message[];
};

export default function Message({ type, time, messages }: MessageProps) {
  const formattedTime = formatTime(time);

  return (
    <div className={twMerge('w-fit', type === 'bot' ? '' : 'ml-auto')}>
      {type === 'bot' ? (
        <div className='flex items-center gap-2'>
          <BotIcon containerClassName='p-1' className='w-4' />
          <span className='block text-xs text-light-700'>Livechat {formattedTime}</span>
        </div>
      ) : (
        <span className='block text-xs text-light-700 text-right'>Visitor {formattedTime}</span>
      )}
      <div className={twMerge('mt-2 space-y-2 max-w-[80%]', type === 'bot' ? 'ms-8' : '')}>
        {messages.map(({ text, options }) => (
          // Message component
          <div key={`${formattedTime} - ${text} ${options?.join(',')}`} className='w-fit'>
            {text && (
              <p
                className={twMerge(
                  'px-4 py-1 border rounded-lg',
                  type === 'bot'
                    ? 'bg-light text-light-700 border-light-500'
                    : 'bg-primary-500 text-light border-primary-500',
                )}>
                {text}
              </p>
            )}
            {options && (
              // Options component
              <div className='flex flex-wrap items-center gap-2 mt-2'>
                {options?.map(option => (
                  <button
                    key={`${formattedTime} - ${option}`}
                    className='px-4 py-1 bg-light text-light-700 border border-light-500 rounded-lg'>
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
