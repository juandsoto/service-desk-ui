import { twMerge } from 'tailwind-merge';
import type { IconProps } from '../constants/icons';
import { ICON_DEFAULT_CLASSNAME } from '../constants/icons';

export default function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 8 14`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6.65299 14C6.30011 13.9999 5.96171 13.8526 5.71222 13.5903L0.389598 7.99718C0.140139 7.73496 0 7.37937 0 7.00859C0 6.63782 0.140139 6.28222 0.389598 6.02001L5.71222 0.426879C5.83497 0.293329 5.9818 0.186805 6.14414 0.113522C6.30649 0.0402396 6.4811 0.00166616 6.65778 5.2795e-05C6.83447 -0.00156057 7.00969 0.0338181 7.17322 0.104125C7.33675 0.174432 7.48532 0.278259 7.61026 0.409547C7.7352 0.540835 7.834 0.696957 7.90091 0.8688C7.96782 1.04064 8.00149 1.22477 7.99995 1.41043C7.99841 1.5961 7.96171 1.77958 7.89197 1.95017C7.82223 2.12077 7.72086 2.27506 7.59377 2.40405L3.21192 7.00859L7.59377 11.6131C7.7798 11.8087 7.90649 12.0578 7.95781 12.329C8.00913 12.6002 7.98278 12.8813 7.88209 13.1368C7.7814 13.3922 7.61089 13.6106 7.39212 13.7643C7.17334 13.9179 6.91613 13.9999 6.65299 14Z'
        fill='currentColor'
      />
    </svg>
  );
}
