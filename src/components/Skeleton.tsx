import React from 'react';
import { twMerge } from 'tailwind-merge';

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return <div className={twMerge('skeleton w-full', className)} />;
};

export default Skeleton;
