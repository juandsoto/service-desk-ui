import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { IconName } from './Icon';
import Icon, { PUBLIC_ICON_NAMES } from './Icon';
import { Button } from './buttons';

type IconFloatingListProps = React.HTMLAttributes<HTMLDivElement> & {
  contentClassName?: string;
  onIconSelected: (iconName: IconName | null) => void;
};

const IconFloatingList: React.FC<IconFloatingListProps> = ({
  className,
  contentClassName,
  onIconSelected,
  ...props
}) => {
  return (
    <div className={twMerge('bg-light rounded-lg p-3', className)} {...props}>
      <div className={twMerge('grid grid-cols-3 lg:grid-cols-6 gap-1', contentClassName)}>
        <Button
          className='aspect-square p-2 flex items-center justify-center'
          variant='outline'
          onClick={() => onIconSelected(null)}>
          N/A
        </Button>
        {PUBLIC_ICON_NAMES.map(iconName => (
          <Button
            key={iconName}
            className='aspect-square p-2 flex items-center justify-center'
            variant='outline'
            onClick={() => onIconSelected(iconName)}>
            <Icon name={iconName} className='w-6 text-primary' />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default IconFloatingList;
