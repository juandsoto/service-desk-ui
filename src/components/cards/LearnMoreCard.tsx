import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';
import { Icon } from '../';
import type { IconName } from '../Icon';

type LearnMoreCardProps = {
  externalLink?: boolean;
  icon?: IconName;
  title: string;
  description: string;
  link: string;
  variant?: 'fill' | 'outline';
};

const VARIANT_CLASSNAME: Record<NonNullable<LearnMoreCardProps['variant']>, string> = {
  fill: 'bg-primary-500 text-light border-primary-500 shadow-light-500',
  outline: 'bg-light text-dark border-light-500 shadow-light-500',
};
const VARIANT_DESCRIPTION_CLASSNAME: Record<NonNullable<LearnMoreCardProps['variant']>, string> = {
  fill: 'text-light-300',
  outline: 'text-light-700',
};
const VARIANT_LINK_CLASSNAME: Record<NonNullable<LearnMoreCardProps['variant']>, string> = {
  fill: 'text-light',
  outline: 'text-primary-500',
};

export default function LearnMoreCard({
  externalLink = false,
  description,
  icon,
  link,
  title,
  variant = 'outline',
}: LearnMoreCardProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-2 w-full px-6 py-4 rounded-md border shadow-sm',
        VARIANT_CLASSNAME[variant],
      )}>
      {icon && <Icon name={icon} className='text-light w-10' />}
      <h3 className='line-clamp-4'>{title}</h3>
      <p className={twMerge('flex-1 text-base line-clamp-3', VARIANT_DESCRIPTION_CLASSNAME[variant])}>{description}</p>
      {externalLink ? (
        <a
          href={link}
          target='_blank'
          className={twMerge('flex w-fit items-center gap-2 font-semibold', VARIANT_LINK_CLASSNAME[variant])}
          rel='noreferrer'>
          <span>Conoce más información</span>
          <Icon name='link' className={twMerge('mt-0.5', VARIANT_LINK_CLASSNAME[variant])} />
        </a>
      ) : (
        <Link
          to={link}
          className={twMerge('flex w-fit items-center gap-2 font-semibold', VARIANT_LINK_CLASSNAME[variant])}>
          <span>Conoce más información</span>
          <Icon name='link' className={twMerge('mt-0.5', VARIANT_LINK_CLASSNAME[variant])} />
        </Link>
      )}
    </div>
  );
}
