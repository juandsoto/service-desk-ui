import { ICON_DEFAULT_CLASSNAME, IconProps } from '../constants/icons';
import { twMerge } from 'tailwind-merge';

export default function WalletIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 36 36`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14.9911 1.04667C14.9913 1.04691 14.9915 1.04715 14.9917 1.04739L19.5785 6.60076H5.74945L12.8277 0.845218C13.14 0.596143 13.5453 0.473611 13.9552 0.508805C14.1581 0.527912 14.3543 0.585826 14.5323 0.678528C14.7104 0.771298 14.8662 0.896768 14.9911 1.04667ZM15.5 22.5137V24.4403C15.5 26.623 16.4003 28.7122 17.9963 30.2497C19.5916 31.7865 21.7516 32.6468 24 32.6468H33.5V34.0734C33.5 34.4456 33.3467 34.8065 33.0673 35.0756C32.7873 35.3453 32.4037 35.5 32 35.5H2C1.59627 35.5 1.21266 35.3453 0.932673 35.0756L0.585786 35.4357L0.932671 35.0756C0.653315 34.8065 0.5 34.4456 0.5 34.0734V12.8806C0.5 12.5084 0.653315 12.1475 0.932671 11.8784C1.21266 11.6087 1.59627 11.454 2 11.454H32C32.4037 11.454 32.7873 11.6087 33.0673 11.8784C33.3467 12.1475 33.5 12.5084 33.5 12.8806V14.3072H24C21.7516 14.3072 19.5916 15.1675 17.9963 16.7043C16.4003 18.2417 15.5 20.331 15.5 22.5137ZM24 19.1605H34C34.4037 19.1605 34.7873 19.3151 35.0673 19.5848C35.3467 19.854 35.5 20.2149 35.5 20.5871V26.3669C35.5 26.7391 35.3467 27.1 35.0673 27.3691C34.7873 27.6389 34.4037 27.7935 34 27.7935H24C23.0658 27.7935 22.1735 27.4359 21.5185 26.8049C20.864 26.1744 20.5 25.3235 20.5 24.4403V22.5137C20.5 21.6305 20.864 20.7796 21.5185 20.1491C22.1735 19.5181 23.0658 19.1605 24 19.1605ZM25.6182 25.4994C26.0288 25.7636 26.5096 25.9036 27 25.9036C27.6571 25.9036 28.2909 25.6523 28.7611 25.1994C29.2319 24.7459 29.5 24.1267 29.5 23.477C29.5 22.9928 29.3509 22.5211 29.0738 22.1217C28.7969 21.7224 28.4053 21.414 27.9507 21.2326C27.4962 21.0513 26.9971 21.0041 26.5157 21.0963C26.0343 21.1886 25.5897 21.4167 25.2389 21.7546C24.8879 22.0927 24.6467 22.5257 24.5488 23C24.4508 23.4745 24.5013 23.9661 24.6929 24.4118C24.8845 24.8573 25.2075 25.235 25.6182 25.4994ZM22.9905 1.04592L27.5785 6.60076H23.7615L20.6295 2.80966C20.6295 2.80965 20.6295 2.80964 20.6295 2.80962C20.3846 2.51308 20.2744 2.13869 20.3182 1.76848C20.3619 1.39799 20.5572 1.05443 20.8682 0.816097C21.1797 0.577286 21.5805 0.465397 21.9818 0.509392C22.383 0.553372 22.745 0.748662 22.9905 1.04592Z'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  );
}
