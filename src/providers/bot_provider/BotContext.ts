import { createContext, useContext } from 'react';
import type { ChatbotMessageProps } from '../../components/chatbot/Message';
import type { TChatbotOption } from '../../models';

export type BotContextProps = {
  status: 'opened' | 'closed' | 'minimized';
  currentOptions: TChatbotOption[];
  chatbotMessages: ChatbotMessageProps[];
  setCurrentOptions: React.Dispatch<React.SetStateAction<TChatbotOption[]>>;
  setChatbotMessages: React.Dispatch<React.SetStateAction<Omit<ChatbotMessageProps, 'selectedOptionsIds'>[]>>;
  open: () => void;
  close: () => void;
  minimize: () => void;
};

export const BotContext = createContext<BotContextProps | undefined>(undefined);

export const useBot = () => {
  const context = useContext(BotContext);
  if (!context) {
    throw new Error('useBot must be used within a BotProvider');
  }
  return context;
};
