import { Icon } from '@components';
import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <div className={twMerge('relative flex items-center justify-between gap-8 max-width h-32', className)} {...props}>
      <Link to='/' className='flex items-center gap-3 cursor-pointer'>
        <Icon name='chevron-left' className='mt-0.5 w-3 h-3' />
        <span>Regresar</span>
      </Link>
      <Link to='/'>
        <img src='/alcaldia.png' className='sm:absolute-center' />
      </Link>
    </div>
  );
};
