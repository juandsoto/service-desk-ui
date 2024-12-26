import { ICON_DEFAULT_CLASSNAME, IconProps } from '../constants/icons';
import { twMerge } from 'tailwind-merge';

export default function QuestionMarkIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 36 36`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18.0886 16.7498C17.7792 16.736 17.4703 16.7857 17.1809 16.8958C16.8911 17.006 16.627 17.1743 16.4049 17.3905C16.1822 17.6049 16.005 17.862 15.8839 18.1464C15.7625 18.4314 15.7 18.7379 15.7 19.0476C15.7 19.0476 15.7 19.0476 15.7 19.0476V21.6C15.7 22.21 15.9423 22.795 16.3737 23.2263C16.805 23.6577 17.39 23.9 18 23.9C18.61 23.9 19.195 23.6577 19.6264 23.2263C20.0577 22.795 20.3 22.21 20.3 21.6V21.0035C21.3568 20.6322 22.3076 20.0048 23.0658 19.175C23.9094 18.2519 24.4821 17.1139 24.7209 15.8863C24.9597 14.6588 24.8554 13.3891 24.4194 12.217C23.9834 11.0449 23.2326 10.0157 22.2495 9.24269C21.2665 8.46964 20.0893 7.98264 18.8475 7.83526C17.6056 7.68788 16.3471 7.88581 15.2105 8.4073C14.0738 8.92879 13.103 9.75364 12.4047 10.7911C11.7065 11.8286 11.3079 13.0386 11.2527 14.2879L11.2526 14.2911C11.2295 14.9001 11.4491 15.4933 11.8631 15.9405C12.2764 16.3869 12.8497 16.6514 13.4575 16.6761C13.7601 16.6914 14.0627 16.6461 14.3476 16.5429C14.6335 16.4393 14.8957 16.2794 15.1187 16.0727C15.3418 15.866 15.5211 15.6167 15.6462 15.3395C15.7706 15.0636 15.8387 14.7656 15.8466 14.4631C15.8699 13.8806 16.1232 13.3311 16.5511 12.9351C16.9797 12.5384 17.5483 12.3283 18.1319 12.3508C18.7155 12.3734 19.2662 12.6269 19.6629 13.0555C20.0596 13.4841 20.2697 14.0527 20.2472 14.6363L20.2468 14.647L20.2468 14.6577C20.248 14.9385 20.1924 15.2167 20.0833 15.4756C19.9743 15.7344 19.8141 15.9685 19.6124 16.1639C19.4106 16.3593 19.1714 16.5119 18.9092 16.6126C18.6477 16.713 18.3686 16.7597 18.0886 16.7498ZM18.0886 16.7498C18.0895 16.7498 18.0904 16.7499 18.0913 16.7499L18.0684 17.2494L18.0865 16.7497C18.0872 16.7497 18.0879 16.7498 18.0886 16.7498ZM8.27753 3.44928C11.1553 1.52641 14.5387 0.500055 17.9997 0.5C22.6395 0.505167 27.0878 2.3506 30.3686 5.63142C33.6495 8.9123 35.4949 13.3607 35.5 18.0005C35.4999 21.4615 34.4735 24.8448 32.5507 27.7225C30.6278 30.6003 27.8947 32.8433 24.697 34.1679C21.4993 35.4924 17.9806 35.839 14.5859 35.1637C11.1913 34.4885 8.07306 32.8218 5.62564 30.3744C3.17822 27.9269 1.51151 24.8087 0.836266 21.4141C0.161024 18.0194 0.507583 14.5007 1.83212 11.303C3.15665 8.10533 5.39967 5.37221 8.27753 3.44928ZM16.7222 28.9124C17.1004 29.1651 17.5451 29.3 18 29.3C18.61 29.3 19.195 29.0577 19.6263 28.6263C20.0577 28.195 20.3 27.61 20.3 27C20.3 26.5451 20.1651 26.1004 19.9124 25.7222C19.6597 25.3439 19.3004 25.0492 18.8802 24.8751C18.4599 24.701 17.9975 24.6554 17.5513 24.7442C17.1051 24.8329 16.6953 25.052 16.3737 25.3736C16.052 25.6953 15.8329 26.1051 15.7442 26.5513C15.6555 26.9974 15.701 27.4599 15.8751 27.8802C16.0492 28.3004 16.344 28.6596 16.7222 28.9124Z'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  );
}
