import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router';
import { twMerge } from 'tailwind-merge';
import { Icon } from '../components';
import type { TCategory, TSubCategory } from '../models';

type SidebarLinkProps = Pick<TCategory, 'title' | 'icon' | 'link'> & {
  subCategories?: TSubCategory[];
  exact?: boolean;
  variant?: 'fill' | 'outline';
  onLinkPress?: () => void;
};

const ACTIVE_VARIANT_CLASSNAME: Record<NonNullable<SidebarLinkProps['variant']>, string> = {
  fill: 'bg-light text-primary-500',
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

const ACTIVE_CHILD_ICON_VARIANT_CLASSNAME: Record<NonNullable<SidebarLinkProps['variant']>, string> = {
  fill: 'text-light',
  outline: 'text-primary-500',
};

const INACTIVE_CHILD_ICON_VARIANT_CLASSNAME: Record<NonNullable<SidebarLinkProps['variant']>, string> = {
  fill: 'text-light',
  outline: 'text-light-700',
};

export default function SidebarLink({
  title,
  icon,
  link,
  subCategories,
  onLinkPress,
  exact = false,
  variant = 'outline',
}: SidebarLinkProps) {
  const [height, setHeight] = useState(0);
  const location = useLocation();
  const params = useParams();
  const isActive = exact
    ? location.pathname.endsWith(link)
    : link.replace('/admin', '').split('/')[1] === params.category || '';
  const contentRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isActive) {
      setHeight(contentRef.current?.scrollHeight || 0);
    } else {
      setHeight(0);
    }
  }, [isActive]);

  return (
    <div>
      <NavLink
        className={twMerge(
          'flex items-center gap-4 p-2 rounded-md',
          isActive ? ACTIVE_VARIANT_CLASSNAME[variant] : INACTIVE_VARIANT_CLASSNAME[variant],
        )}
        to={link}
        onClick={onLinkPress}>
        <div className='flex items-center gap-2 flex-1'>
          <Icon
            name={icon}
            className={twMerge(
              'min-w-4',
              isActive ? ACTIVE_ICON_VARIANT_CLASSNAME[variant] : INACTIVE_ICON_VARIANT_CLASSNAME[variant],
            )}
          />
          <span className='line-clamp-1'>{title}</span>
        </div>
        {(subCategories?.length ?? 0) > 0 && (
          <Icon
            name='chevron-down'
            className={twMerge(
              'w-2.5 transition-transform duration-300',
              isActive ? 'rotate-180' : '',
              isActive ? ACTIVE_ICON_VARIANT_CLASSNAME[variant] : INACTIVE_ICON_VARIANT_CLASSNAME[variant],
            )}
          />
        )}
      </NavLink>
      {(subCategories?.length ?? 0) > 0 && (
        <ul
          ref={contentRef}
          style={{ height: `${height}px` }}
          className={twMerge('overflow-hidden transition-all duration-300 pl-6 space-y-4', isActive ? 'my-2' : 'my-0')}>
          {subCategories?.map(subCategory => {
            const isChildActive = location.pathname.endsWith(subCategory.link);
            return (
              <li key={`${link}${subCategory.link}`}>
                <Link
                  className={
                    isChildActive ? twMerge('border-l-indicator', variant === 'fill' ? 'before:bg-light' : '') : ''
                  }
                  to={`${link}${subCategory.link}`}
                  onClick={onLinkPress}>
                  <div className='flex items-center gap-2 flex-1'>
                    <Icon
                      name={subCategory.icon}
                      className={twMerge(
                        'min-w-4',
                        isChildActive
                          ? ACTIVE_CHILD_ICON_VARIANT_CLASSNAME[variant]
                          : INACTIVE_CHILD_ICON_VARIANT_CLASSNAME[variant],
                      )}
                    />
                    <span className='line-clamp-1'>{subCategory.title}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
