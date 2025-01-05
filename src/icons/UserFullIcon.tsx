import { twMerge } from 'tailwind-merge';
import type { IconProps } from './constants';
import { ICON_DEFAULT_CLASSNAME } from './constants';

export default function UserFullIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 26 26`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13 0.5C10.5277 0.5 8.11099 1.23311 6.05538 2.60663C3.99976 3.98015 2.39761 5.93238 1.45151 8.21646C0.505416 10.5005 0.257874 13.0139 0.74019 15.4386C1.2225 17.8634 2.41301 20.0907 4.16117 21.8388C5.90933 23.587 8.13661 24.7775 10.5614 25.2598C12.9861 25.7421 15.4995 25.4946 17.7836 24.5485C20.0676 23.6024 22.0199 22.0002 23.3934 19.9446C24.7669 17.889 25.5 15.4723 25.5 13C25.4964 9.68591 24.1782 6.5086 21.8348 4.16518C19.4914 1.82177 16.3141 0.503639 13 0.5ZM13 6.75C13.7417 6.75 14.4667 6.96993 15.0834 7.38199C15.7001 7.79404 16.1807 8.37971 16.4646 9.06494C16.7484 9.75016 16.8226 10.5042 16.678 11.2316C16.5333 11.959 16.1761 12.6272 15.6517 13.1517C15.1272 13.6761 14.459 14.0333 13.7316 14.1779C13.0042 14.3226 12.2502 14.2484 11.5649 13.9645C10.8797 13.6807 10.2941 13.2001 9.88199 12.5834C9.46994 11.9667 9.25001 11.2417 9.25001 10.5C9.25001 9.50544 9.64509 8.55161 10.3484 7.84835C11.0516 7.14509 12.0054 6.75 13 6.75ZM13 23C10.799 23.0024 8.64623 22.3554 6.81125 21.14C6.95628 19.9314 7.53865 18.8176 8.44849 18.0088C9.35832 17.2001 10.5327 16.7523 11.75 16.75H14.25C15.4673 16.7523 16.6417 17.2001 17.5515 18.0088C18.4614 18.8176 19.0437 19.9314 19.1888 21.14C17.3538 22.3554 15.201 23.0024 13 23Z'
        fill='currentColor'
      />
    </svg>
  );
}
