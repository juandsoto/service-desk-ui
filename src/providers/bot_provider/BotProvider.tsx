import { useState } from 'react';
import type { ChatbotMessageProps } from '../../components/chatbot/Message';
import type { TChatbotOption } from '../../models';
import type { BotContextProps } from './BotContext';
import { BotContext } from './BotContext';

export const BotProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [status, setStatus] = useState<BotContextProps['status']>('closed');
  const [currentOptions, setCurrentOptions] = useState<TChatbotOption[]>([]);
  const [chatbotMessages, setChatbotMessages] = useState<ChatbotMessageProps[]>([]);

  const open = () => setStatus('opened');
  const close = () => setStatus('closed');
  const minimize = () => setStatus('minimized');

  return (
    <BotContext.Provider
      value={{ status, chatbotMessages, currentOptions, setChatbotMessages, setCurrentOptions, open, close, minimize }}>
      {children}
    </BotContext.Provider>
  );
};
