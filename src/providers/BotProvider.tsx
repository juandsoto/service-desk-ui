import { createContext, useContext, useState } from 'react';

type BotContext = {
  status: 'opened' | 'closed' | 'minimized';
  open: () => void;
  close: () => void;
  minimize: () => void;
};

const BotContext = createContext<BotContext | undefined>(undefined);

export const useBot = () => {
  const context = useContext(BotContext);
  if (!context) {
    throw new Error('useBot must be used within a BotProvider');
  }
  return context;
};

export const BotProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [status, setStatus] = useState<BotContext['status']>('closed');

  const open = () => setStatus('opened');
  const close = () => setStatus('closed');
  const minimize = () => setStatus('minimized');

  return <BotContext.Provider value={{ status, open, close, minimize }}>{children}</BotContext.Provider>;
};
