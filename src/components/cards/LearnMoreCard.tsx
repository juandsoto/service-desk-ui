import { Icon } from '@components';
import type { IconName } from '@components/Icon';
import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

type LearnMoreCardProps = {
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

export default function LearnMoreCard({ description, icon, link, title, variant = 'outline' }: LearnMoreCardProps) {
  return (
    <div className={twMerge('space-y-2 w-full px-6 py-4 rounded-md border shadow-sm', VARIANT_CLASSNAME[variant])}>
      {icon && <Icon name={icon} className='text-light w-10' />}
      <h3>{title}</h3>
      <p className={twMerge('text-base', VARIANT_DESCRIPTION_CLASSNAME[variant])}>{description}</p>
      <Link
        to={link}
        className={twMerge('flex w-fit items-center gap-2 font-semibold', VARIANT_LINK_CLASSNAME[variant])}>
        <span>Conoce más información</span>
        <Icon name='link' className={twMerge('mt-0.5', VARIANT_LINK_CLASSNAME[variant])} />
      </Link>
    </div>
  );
}