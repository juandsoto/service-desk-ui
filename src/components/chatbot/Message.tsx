import { twMerge } from 'tailwind-merge';
import { BotIcon } from '../../icons';
import { Utils } from '../../utils';
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
  selectedOptionsIds: number[];
  onOptionSelected?: (optionValue: number) => void;
};

export default function Message({
  type,
  time,
  messages,
  selectedOptionsIds,
  blockOptions = false,
  onOptionSelected,
}: ChatbotMessageProps) {
  const formattedTime = formatTime(time);

  return (
    <div className={twMerge(type === 'bot' ? '' : 'flex flex-col items-end')}>
      {type === 'bot' ? (
        <div className='flex items-center gap-2'>
          <BotIcon containerClassName='p-1' className='w-4' />
          <span className='block text-xs text-light-700'>Chatbot {formattedTime}</span>
        </div>
      ) : (
        <span className='block text-xs text-light-700 text-right'>Tú {formattedTime}</span>
      )}
      <div className={twMerge('mt-2 space-y-2 max-w-[80%]', type === 'bot' ? 'ms-8' : '')}>
        {messages.map(({ text, options }) => (
          // Message component
          <div key={`${formattedTime} - ${text} ${options?.join(',')}`} className='w-fit'>
            {type === 'bot'
              ? text && (
                  <p
                    className='text-left w-fit px-4 py-1 border rounded-lg bg-light text-light-700 border-light-500'
                    dangerouslySetInnerHTML={{
                      __html: Utils.parseTextWithLinks(Utils.parseTextWithPhoneNumber(text)).replace(/\n/g, '<br/>'),
                    }}
                  />
                )
              : text && (
                  <p className='text-right w-fit px-4 py-1 border rounded-lg bg-primary text-light border-primary'>
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
                      'text-left px-4 py-1 bg-light text-light-700 border border-light-500 rounded-lg shadow-md',
                      selectedOptionsIds.includes(option.value)
                        ? 'bg-primary border-primary text-light text-right'
                        : '',
                    )}
                    onClick={() => onOptionSelected?.(option.value)}>
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
