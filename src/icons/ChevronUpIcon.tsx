import { ICON_DEFAULT_CLASSNAME, IconProps } from '../constants/icons';
import { twMerge } from 'tailwind-merge';

export default function ChevronUpIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 14 8`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.602 7.98365C12.2312 7.98357 11.8756 7.84333 11.6134 7.59377L7.00874 3.21192L2.4041 7.59377C2.27511 7.72086 2.12081 7.82223 1.95021 7.89197C1.77962 7.96171 1.59613 7.99841 1.41046 7.99995C1.2248 8.00149 1.04067 7.96782 0.868819 7.90091C0.696971 7.834 0.540847 7.7352 0.409556 7.61026C0.278264 7.48532 0.174435 7.33675 0.104127 7.17322C0.0338188 7.00969 -0.0015606 6.83447 5.27961e-05 6.65778C0.00166619 6.4811 0.0402404 6.30649 0.113525 6.14414C0.186809 5.9818 0.293335 5.83497 0.426888 5.71222L6.02013 0.389598C6.28236 0.140139 6.63796 0 7.00874 0C7.37952 0 7.73512 0.140139 7.99735 0.389598L13.5906 5.71222C13.7861 5.89831 13.9192 6.13539 13.9731 6.39347C14.0271 6.65156 13.9994 6.91906 13.8936 7.16217C13.7878 7.40528 13.6086 7.61308 13.3787 7.7593C13.1488 7.90552 12.8785 7.98359 12.602 7.98365Z'
        fill='currentColor'
      />
    </svg>
  );
}