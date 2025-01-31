import { Link } from 'react-router';
import { Icon } from '../';
import type { IconName } from '../Icon';

type QuickAccessProps = {
  externalLink?: boolean;
  icon: IconName;
  title: string;
  link: string;
};

export default function QuickAccess({ externalLink = false, icon, title, link }: QuickAccessProps) {
  if (externalLink)
    return (
      <a
        href={link}
        target='_blank'
        className='basis-72 flex-1 flex flex-col items-center px-12 py-8 justify-center gap-2 w-full bg-light-500 text-dark rounded-md text-center'
        rel='noreferrer'>
        <Icon name={icon} className='text-primary-500 w-10' />
        <h3>{title}</h3>
      </a>
    );

  return (
    <Link
      to={link}
      className='basis-72 flex-1 flex flex-col items-center px-12 py-8 justify-center gap-2 w-full bg-light-500 text-dark rounded-md text-center'>
      <Icon name={icon} className='text-primary-500 w-10' />
      <h3>{title}</h3>
    </Link>
  );
}
