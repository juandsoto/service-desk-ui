import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

type GovBannerProps = React.HTMLAttributes<HTMLDivElement>;

export const GovBanner: React.FC<GovBannerProps> = ({ className, ...props }) => {
  return (
    <div className={twMerge('bg-static-blue w-full h-16', className)} {...props}>
      <div className='max-width flex items-center gap-4 h-full'>
        <div className='flex-1'>
          <img src='/gov.png' className='max-w-full mx-0 md:ml-16 h-auto md:h-1/2' />
        </div>
        <Link className='text-light bg-static-blue-500 px-4 py-2 rounded-md' to='/admin/iniciar-sesion'>
          Ingresar
        </Link>
      </div>
    </div>
  );
};
