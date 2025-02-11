import { forwardRef, useImperativeHandle, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Icon } from '..';
import { BotIcon } from '../../icons';
import { useBot } from '../../providers/bot_provider';

type ChatbotProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  showInput?: boolean;
  onInputSubmit: (text: string) => void;
};

export type ChatbotRef = {
  scrollToLastMessage: () => void;
};

const Chatbot = forwardRef<ChatbotRef, ChatbotProps>(function ChatBot(
  { className, showInput = false, onInputSubmit, onClose, children, ...props },
  ref,
) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bot = useBot();

  useImperativeHandle(ref, () => ({
    scrollToLastMessage: () => {
      wrapperRef.current?.scrollTo({
        top: wrapperRef.current.scrollHeight,
        behavior: 'smooth',
      });
    },
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const message = Object.fromEntries(formData.entries()).message as string;

    if (message.trim().length === 0) return;

    onInputSubmit(message);
  };

  return (
    <div
      ref={wrapperRef}
      className={twMerge(
        'relative flex flex-col w-full xs:w-[440px] bg-light min-h-32 h-[90vh] sm:h-[80vh] mx-auto overflow-auto',
        className,
      )}
      {...props}>
      <div className='sticky top-0 flex items-center gap-4 bg-light border-b border-light-500 z-50 p-4'>
        <h4 className='flex-1 text-light-700 font-normal'>Habla con nosotros</h4>
        <div className='flex items-center gap-2'>
          <button onClick={bot.minimize}>
            <Icon name='minimize' className='w-8 text-light-700' />
          </button>
          <button
            onClick={() => {
              onClose();
              bot.close();
            }}>
            <Icon name='close' className='w-8 text-light-700' />
          </button>
        </div>
      </div>

      <div className='flex items-center gap-8 border-b border-light-500 px-4 py-2'>
        <BotIcon showIndicator containerClassName='bg-light-300 p-2 before:w-3' className='w-8' />
        <div>
          <h5 className='font-normal'>Chatbot</h5>
          <span className='text-sm text-light-700'>Agente de soporte</span>
        </div>
      </div>

      {/* Messages */}
      <div className='flex-1 space-y-4 p-4 pb-16'>{children}</div>

      {showInput && (
        <div className='sticky bottom-0 h-14 bg-light border-t border-light-500'>
          <form className='flex' onSubmit={handleSubmit}>
            <input
              autoFocus={showInput}
              className='flex-1 w-32 xs:w-auto px-2 xs:px-6 py-4 outline-none'
              name='message'
              type='text'
              placeholder='Escribe un mensaje'
            />
            <div className='flex-1 flex'>
              <button type='button' className='flex-1 flex items-center justify-center'>
                <Icon name='happy' className='w-6 text-light-700' />
              </button>
              <button type='button' className='flex-1 flex items-center justify-center'>
                <Icon name='paperclip' className='w-6 text-light-700' />
              </button>
              <button type='submit' className='flex-1 flex items-center justify-center'>
                <Icon name='send' className='w-6 text-light-700' />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
});

export default Chatbot;
