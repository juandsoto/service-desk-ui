import { Link } from 'react-router';
import { Icon } from '../';
import type { IconName } from '../Icon';

type LinkCardProps = {
  icon: IconName;
  title: string;
  description: string;
  link: string;
};

export default function LinkCard({ description, icon, title, link }: LinkCardProps) {
  return (
    <Link
      to={link}
      className='space-y-2 w-full bg-light text-dark p-6 rounded-md border border-light-500 shadow-sm shadow-light-500'>
      <Icon name={icon} className='text-primary-500 w-10' />
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}
