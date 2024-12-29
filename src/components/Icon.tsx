import { IconProps } from '../constants/icons';
import {
  BellOnIcon,
  BriefcaseIcon,
  CalendarDayIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  CloseIcon,
  ExitIcon,
  FacebookIcon,
  FileIcon,
  HappyIcon,
  HeartIcon,
  HomeIcon,
  InfoIcon,
  InstagramIcon,
  LinkIcon,
  LockIcon,
  MenuIcon,
  MessagesIcon,
  MinimizeIcon,
  PaperclipIcon,
  QuestionMarkIcon,
  SearchIcon,
  SendIcon,
  TwitterIcon,
  UnknownIcon,
  UserFullIcon,
  UserIcon,
  WalletIcon,
  YoutubeIcon,
} from '../icons';

export type IconName =
  | 'bell-on'
  | 'briefcase'
  | 'calendar-day'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-up'
  | 'close'
  | 'exit'
  | 'facebook'
  | 'file'
  | 'happy'
  | 'heart'
  | 'home'
  | 'info'
  | 'instagram'
  | 'link'
  | 'lock'
  | 'menu'
  | 'messages'
  | 'minimize'
  | 'paperclip'
  | 'question-mark'
  | 'search'
  | 'send'
  | 'twitter'
  | 'user-full'
  | 'user'
  | 'wallet'
  | 'youtube';

type WrapperIconProps = IconProps & {
  name: IconName;
};

const iconMap: Record<IconName, (props: IconProps) => React.ReactNode> = {
  'bell-on': BellOnIcon,
  briefcase: BriefcaseIcon,
  'calendar-day': CalendarDayIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-up': ChevronUpIcon,
  close: CloseIcon,
  exit: ExitIcon,
  facebook: FacebookIcon,
  file: FileIcon,
  happy: HappyIcon,
  heart: HeartIcon,
  home: HomeIcon,
  info: InfoIcon,
  instagram: InstagramIcon,
  link: LinkIcon,
  lock: LockIcon,
  menu: MenuIcon,
  messages: MessagesIcon,
  minimize: MinimizeIcon,
  paperclip: PaperclipIcon,
  'question-mark': QuestionMarkIcon,
  search: SearchIcon,
  send: SendIcon,
  twitter: TwitterIcon,
  'user-full': UserFullIcon,
  user: UserIcon,
  wallet: WalletIcon,
  youtube: YoutubeIcon,
};

const Icon: React.FC<WrapperIconProps> = ({ name, ...props }) => {
  const Icon = iconMap[name] || UnknownIcon;
  return <Icon {...props} />;
};

export default Icon;
