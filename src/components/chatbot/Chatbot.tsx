import { Icon } from '..';
import { BotIcon } from '../../icons';
import { useBot } from '../../providers/BotProvider';

type ChatbotProps = React.PropsWithChildren & {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function ChatBot({ onSubmit, children }: ChatbotProps) {
  const bot = useBot();

  return (
    <div className='relative w-full xs:w-[440px] bg-light max-h-[90vh] mx-auto overflow-auto'>
      <div className='sticky top-0 flex items-center gap-4 bg-light border-b border-light-500 z-50 p-4'>
        <h4 className='flex-1 text-light-700 font-normal'>Habla con nosotros</h4>
        <div className='flex items-center gap-2'>
          <button onClick={bot.minimize}>
            <Icon name='minimize' className='w-8 text-light-700' />
          </button>
          <button onClick={bot.close}>
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
      <div className='space-y-4 p-4'>{children}</div>

      <div className='sticky bottom-0 h-14 bg-light border-t border-light-500'>
        <form className='flex' onSubmit={onSubmit}>
          <input
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
    </div>
  );
}
