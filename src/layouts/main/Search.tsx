import { twMerge } from 'tailwind-merge';
import { Icon } from '@components';
import { BotIcon } from '@icons';

type SearchProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: React.ReactNode;
  openBot: () => void;
};

export const Search: React.FC<SearchProps> = ({ className, title, description, openBot, ...props }) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={twMerge('bg-banner h-72 bg-primary-500 text-light mb-12', className)} {...props}>
      <div className='relative max-width h-full flex flex-col items-center justify-center text-center space-y-4'>
        <h1>{title}</h1>
        {description}
        <form className='w-fit mx-auto' onSubmit={handleOnSubmit}>
          <label htmlFor='default-search' className='mb-2 text-sm font-medium sr-only'>
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none'>
              <Icon name='search' className='text-primary-500' />
            </div>
            <input
              type='search'
              id='default-search'
              className='block sm:w-96 p-4 ps-10 bg-light text-dark border border-light-500 rounded-lg focus:ring-primary focus:border-primary outline-primary'
              placeholder='Ingresa una palabra clave o una pregunta'
            />
          </div>
        </form>

        <div className='absolute -bottom-10 right-4'>
          <button onClick={openBot}>
            <BotIcon className='w-8 sm:w-12' showIndicator />
          </button>
        </div>
      </div>
    </div>
  );
};
