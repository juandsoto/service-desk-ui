import { useNavigate, useSearchParams } from 'react-router';
import { twMerge } from 'tailwind-merge';
import { Icon } from '../../components';
import { BotIcon } from '../../icons';

type SearchProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  openBot: () => void;
};

export const Search: React.FC<SearchProps> = ({ className, style, title, description, openBot, ...props }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') ?? '';

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;

    if (q.length === 0) {
      navigate('/');
      return;
    }

    navigate({ pathname: '/search', search: `q=${encodeURIComponent(q)}` });
  };

  return (
    <div
      className={twMerge('min-h-72 place-content-center bg-primary-500 text-light', className)}
      style={{
        ...style,
        background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      {...props}>
      <div className='relative max-width h-full flex flex-col items-center justify-center text-center space-y-4 py-12 sm:py-0'>
        <h1 className='max-w-[48rem] line-clamp-3 py-1'>{title}</h1>
        <p className=' max-w-[48rem] line-clamp-5'>{description}</p>
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
              id='search'
              name='search'
              value={query}
              onChange={handleSearchChange}
              className='block sm:w-96 p-4 ps-12 bg-light text-dark border border-light-500 rounded-lg focus:ring-primary focus:border-primary outline-primary'
              placeholder='Ingresa una palabra clave o una pregunta'
            />
          </div>
        </form>
        <div className='absolute top-[calc(100%-3rem)] sm:top-full right-4'>
          <button onClick={openBot}>
            <BotIcon className='w-8 sm:w-12' showIndicator />
          </button>
        </div>
      </div>
    </div>
  );
};
