import { createContext, useContext } from 'react';

export type BotContextProps = {
  status: 'opened' | 'closed' | 'minimized';
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
