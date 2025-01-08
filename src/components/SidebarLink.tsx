import { Link, NavLink, useLocation } from 'react-router';
import { twMerge } from 'tailwind-merge';
import { Icon } from '../components';
import type { TCategory } from '../models';
import type { TSubCategory } from '../models/SubCategory';

type SidebarLinkProps = Pick<TCategory, 'title' | 'icon' | 'link'> & {
  subCategories?: TSubCategory[];
  exact?: boolean;
  variant?: 'fill' | 'outline';
};

const ACTIVE_VARIANT_CLASSNAME: Record<NonNullable<SidebarLinkProps['variant']>, string> = {
  fill: 'bg-white text-primary-500',
  outline: 'bg-primary text-light',
};

const INACTIVE_VARIANT_CLASSNAME: Record<NonNullable<SidebarLinkProps['variant']>, string> = {
  fill: 'text-light',
  outline: 'text-dark',
};

const ACTIVE_ICON_VARIANT_CLASSNAME: Record<NonNullable<SidebarLinkProps['variant']>, string> = {
  fill: 'text-primary-500',
  outline: 'text-light',
};

const INACTIVE_ICON_VARIANT_CLASSNAME: Record<NonNullable<SidebarLinkProps['variant']>, string> = {
  fill: 'text-light',
  outline: 'text-light-700',
};

export default function SidebarLink({
  title,
  icon,
  link,
  subCategories,
  exact = false,
  variant = 'outline',
}: SidebarLinkProps) {
  const location = useLocation();
  const isActive = exact ? location.pathname.endsWith(link) : location.pathname.includes(link);

  return (
    <>
      <NavLink
        className={twMerge(
          'flex items-center gap-4 p-2 rounded-md',
          isActive ? ACTIVE_VARIANT_CLASSNAME[variant] : INACTIVE_VARIANT_CLASSNAME[variant],
        )}
        to={link}>
        <div className='flex items-center gap-2 flex-1'>
          <Icon
            name={icon}
            className={twMerge(
              'w-4',
              isActive ? ACTIVE_ICON_VARIANT_CLASSNAME[variant] : INACTIVE_ICON_VARIANT_CLASSNAME[variant],
            )}
          />
          <span>{title}</span>
        </div>
        {(subCategories?.length ?? 0) > 0 &&
          (isActive ? (
            <Icon
              name='chevron-up'
              className={twMerge(
                'w-2.5',
                isActive ? ACTIVE_ICON_VARIANT_CLASSNAME[variant] : INACTIVE_ICON_VARIANT_CLASSNAME[variant],
              )}
            />
          ) : (
            <Icon
              name='chevron-down'
              className={twMerge(
                'w-2.5',
                isActive ? ACTIVE_ICON_VARIANT_CLASSNAME[variant] : INACTIVE_ICON_VARIANT_CLASSNAME[variant],
              )}
            />
          ))}
      </NavLink>
      {(subCategories?.length ?? 0) > 0 && (
        <ul
          className='pl-10 space-y-4 mb-4'
          style={{
            display: isActive ? 'block' : 'none',
          }}>
          {subCategories?.map(subCategory => {
            const isChildActive = location.pathname.includes(subCategory.link);
            return (
              <li key={`${link}${subCategory.link}`}>
                <Link
                  className={
                    isChildActive ? twMerge('border-l-indicator', variant === 'fill' ? 'before:bg-light' : '') : ''
                  }
                  to={`${link}${subCategory.link}`}>
                  {subCategory.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
