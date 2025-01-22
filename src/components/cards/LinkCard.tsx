import type { LinkProps } from 'react-router';
import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';
import { Icon } from '../';
import type { IconName } from '../Icon';

type LinkCardProps = Omit<LinkProps, 'to'> & {
  icon: IconName | null;
  title: string;
  description: string;
  link: string;
};

export default function LinkCard({ description, icon, title, link, className, ...props }: LinkCardProps) {
  return (
    <Link
      to={link}
      className={twMerge(
        'space-y-2 w-full bg-light text-dark p-6 rounded-md border border-light-500 shadow-sm shadow-light-500',
        className,
      )}
      {...props}>
      <Icon name={icon} className='text-primary-500 w-10' />
      <h3 className='line-clamp-2'>{title}</h3>
      <p className='line-clamp-3'>{description}</p>
    </Link>
  );
}
