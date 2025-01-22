import { Link, useNavigate } from 'react-router';
import { twMerge } from 'tailwind-merge';
import { Icon } from '../../components';
import { Button } from '../../components/buttons';

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  const navigate = useNavigate();

  return (
    <div
      className={twMerge(
        'relative flex items-center justify-around sm:justify-between gap-8 max-width h-32',
        className,
      )}
      {...props}>
      <Button unstyled onClick={() => navigate(-1)} className='flex items-center gap-3 cursor-pointer'>
        <Icon name='chevron-down' className='mt-0.5 w-3 h-3 rotate-90' />
        <span>Regresar</span>
      </Button>
      <Link to='/'>
        <img src='/alcaldia.png' className='sm:absolute-center' />
      </Link>
    </div>
  );
};
