import { twMerge } from 'tailwind-merge';
import type { IconProps } from './constants';
import { ICON_DEFAULT_CLASSNAME } from './constants';

export default function HappyIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge(ICON_DEFAULT_CLASSNAME, className)}
      viewBox={`0 0 30 30`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15 0C6.72896 0 0 6.72896 0 15C0 23.271 6.72896 30 15 30C23.271 30 30 23.271 30 15C30 6.72896 23.271 0 15 0ZM15 28.125C7.76285 28.125 1.875 22.2371 1.875 15C1.875 7.76285 7.76285 1.875 15 1.875C22.2371 1.875 28.125 7.76285 28.125 15C28.125 22.2371 22.2371 28.125 15 28.125ZM23.0595 19.1719C22.0814 20.3634 20.8512 21.3232 19.4576 21.9822C18.0639 22.6412 16.5415 22.983 14.9999 22.983C13.4584 22.983 11.9359 22.6412 10.5423 21.9822C9.1487 21.3232 7.91852 20.3634 6.94037 19.1719C6.86173 19.0768 6.80263 18.9672 6.76645 18.8492C6.73027 18.7313 6.71772 18.6074 6.72952 18.4846C6.74133 18.3618 6.77725 18.2425 6.83524 18.1336C6.89323 18.0247 6.97213 17.9284 7.06744 17.85C7.16274 17.7717 7.27257 17.7129 7.39062 17.6771C7.50868 17.6413 7.63264 17.6292 7.7554 17.6414C7.87816 17.6536 7.99731 17.6899 8.10601 17.7482C8.21472 17.8065 8.31084 17.8858 8.38887 17.9813C9.19113 18.9588 10.2002 19.7463 11.3433 20.2869C12.4865 20.8276 13.7353 21.108 14.9999 21.108C16.2645 21.108 17.5133 20.8276 18.6565 20.2869C19.7997 19.7463 20.8087 18.9588 21.611 17.9813C21.7691 17.7901 21.9966 17.6694 22.2436 17.6457C22.4906 17.622 22.7369 17.6971 22.9286 17.8546C23.1203 18.0122 23.2417 18.2393 23.2662 18.4862C23.2907 18.7331 23.2164 18.9797 23.0595 19.1719H23.0595ZM17.1759 12.4075V11.748C17.1759 10.3672 18.4639 9.24387 20.047 9.24387C21.6301 9.24387 22.9181 10.3672 22.9181 11.748V12.4078C22.9181 12.6565 22.8194 12.8949 22.6435 13.0707C22.4677 13.2465 22.2293 13.3453 21.9806 13.3453C21.732 13.3453 21.4935 13.2465 21.3177 13.0707C21.1419 12.8949 21.0431 12.6565 21.0431 12.4078V11.748C21.0431 11.451 20.6171 11.1189 20.047 11.1189C19.477 11.1189 19.0509 11.451 19.0509 11.748V12.4078C19.0509 12.6565 18.9522 12.8949 18.7764 13.0707C18.6005 13.2465 18.3621 13.3453 18.1134 13.3453C17.8648 13.3453 17.6263 13.2465 17.4505 13.0707C17.2747 12.8949 17.1759 12.6565 17.1759 12.4078V12.4075ZM7.08158 12.4075V11.748C7.08158 10.3672 8.36965 9.24387 9.95268 9.24387C11.5357 9.24387 12.8238 10.3672 12.8238 11.748V12.4078C12.8238 12.6565 12.725 12.8949 12.5492 13.0707C12.3734 13.2465 12.1349 13.3453 11.8863 13.3453C11.6376 13.3453 11.3992 13.2465 11.2234 13.0707C11.0475 12.8949 10.9488 12.6565 10.9488 12.4078V11.748C10.9488 11.451 10.5228 11.1189 9.95268 11.1189C9.38256 11.1189 8.95658 11.451 8.95658 11.748V12.4078C8.95658 12.6565 8.85781 12.8949 8.682 13.0707C8.50618 13.2465 8.26772 13.3453 8.01908 13.3453C7.77044 13.3453 7.53198 13.2465 7.35617 13.0707C7.18035 12.8949 7.08158 12.6565 7.08158 12.4078V12.4075Z'
        fill='currentColor'
      />
    </svg>
  );
}
