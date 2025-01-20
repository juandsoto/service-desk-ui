import { useState } from 'react';
import type { BotContextProps } from './BotContext';
import { BotContext } from './BotContext';

export const BotProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [status, setStatus] = useState<BotContextProps['status']>('closed');

  const open = () => setStatus('opened');
  const close = () => setStatus('closed');
  const minimize = () => setStatus('minimized');

  return <BotContext.Provider value={{ status, open, close, minimize }}>{children}</BotContext.Provider>;
};
