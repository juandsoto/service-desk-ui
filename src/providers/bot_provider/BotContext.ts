import { createContext, useContext } from 'react';
import type { ChatbotMessageProps } from '../../components/chatbot/Message';
import type { TChatbotOption } from '../../models';

export type BotContextProps = {
  status: 'opened' | 'closed' | 'minimized';
  currentOptions: TChatbotOption[];
  chatbotMessages: Omit<ChatbotMessageProps, 'selectedOptionsIds'>[];
  botStatus: 'idle' | 'loading' | 'finished';
  selectedOptionsIds: number[];
  setCurrentOptions: React.Dispatch<React.SetStateAction<TChatbotOption[]>>;
  setChatbotMessages: React.Dispatch<React.SetStateAction<Omit<ChatbotMessageProps, 'selectedOptionsIds'>[]>>;
  setBotStatus: React.Dispatch<React.SetStateAction<'idle' | 'loading' | 'finished'>>;
  setSelectedOptionsIds: React.Dispatch<React.SetStateAction<number[]>>;
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
