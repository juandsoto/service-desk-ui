import { BotIcon } from '../../icons';
import { useBot } from '../../providers/BotProvider';

export default function Minimized() {
  const bot = useBot();

  return (
    <button onClick={bot.open} className='flex gap-4 bg-light border-b border-light-500 pl-4 pr-8 py-2 rounded-t-lg'>
      <BotIcon showIndicator containerClassName='bg-light-300 p-2 before:w-3' className='w-6' />
      <div className='text-left'>
        <h6 className='font-normal'>Chatbot</h6>
        <span className='text-sm text-light-700'>Agente de soporte</span>
      </div>
    </button>
  );
}
