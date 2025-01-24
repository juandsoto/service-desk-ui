import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { BotIcon } from '../../icons';
import { formatTime } from '../../utils/dates';
import { Button } from '../buttons';

type Message = {
  text?: string;
  options?: { label: string; value: number }[];
};

export type ChatbotMessageProps = {
  type: 'bot' | 'user';
  time: Date;
  messages: Message[];
  blockOptions?: boolean;
  onOptionSelected?: (optionValue: number) => void;
};

export default function Message({ type, time, messages, blockOptions = false, onOptionSelected }: ChatbotMessageProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<number>(-1);

  const formattedTime = formatTime(time);

  return (
    <div className={twMerge(type === 'bot' ? '' : 'flex flex-col items-end')}>
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
                  'w-fit px-4 py-1 border rounded-lg',
                  type === 'bot' ? 'bg-light text-light-700 border-light-500' : 'bg-primary text-light border-primary',
                )}>
                {text}
              </p>
            )}
            {options && (
              // Options component
              <div className='flex flex-wrap items-center gap-2 mt-2'>
                {options?.map(option => (
                  <Button
                    unstyled
                    disabled={blockOptions}
                    key={`${formattedTime} - ${option.value}`}
                    className={twMerge(
                      'px-4 py-1 bg-light text-light-700 border border-light-500 rounded-lg shadow-md',
                      selectedOptionId === option.value ? 'bg-primary border-primary text-light' : '',
                    )}
                    onClick={() => {
                      setSelectedOptionId(option.value);
                      onOptionSelected?.(option.value);
                    }}>
                    {option.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
