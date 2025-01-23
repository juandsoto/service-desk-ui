import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

type GovBannerProps = React.HTMLAttributes<HTMLDivElement>;

export const GovBanner: React.FC<GovBannerProps> = ({ className, ...props }) => {
  return (
    <div className={twMerge('bg-primary w-full h-16', className)} {...props}>
      <div className='max-width flex items-center h-full'>
        <Link className='ml-auto text-light bg-primary-500 px-4 py-2 rounded-md' to='/admin/iniciar-sesion'>
          Ingresar
        </Link>
      </div>
    </div>
  );
};
