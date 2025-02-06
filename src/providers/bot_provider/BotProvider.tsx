import { useState } from 'react';
import type { BotContextProps } from './BotContext';
import { BotContext } from './BotContext';

export const BotProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [status, setStatus] = useState<BotContextProps['status']>('closed');
  const [username, setUsername] = useState<BotContextProps['username']>('');
  const [currentOptions, setCurrentOptions] = useState<BotContextProps['currentOptions']>([]);
  const [chatbotMessages, setChatbotMessages] = useState<BotContextProps['chatbotMessages']>([]);
  const [botStatus, setBotStatus] = useState<BotContextProps['botStatus']>('idle');
  const [selectedOptionsIds, setSelectedOptionsIds] = useState<BotContextProps['selectedOptionsIds']>([]);

  const open = () => setStatus('opened');
  const close = () => setStatus('closed');
  const minimize = () => setStatus('minimized');

  return (
    <BotContext.Provider
      value={{
        status,
        username,
        chatbotMessages,
        currentOptions,
        botStatus,
        setUsername,
        selectedOptionsIds,
        setChatbotMessages,
        setCurrentOptions,
        setBotStatus,
        setSelectedOptionsIds,
        open,
        close,
        minimize,
      }}>
      {children}
    </BotContext.Provider>
  );
};
