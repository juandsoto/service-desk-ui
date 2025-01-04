import type { IconProps } from '../constants/icons';
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
  AudioIcon,
  BookIcon,
  BrainIcon,
  DownloadIcon,
  ExclamationMarkIcon,
  PhoneIcon,
  VideoIcon,
  HappyFullIcon,
} from '../icons';

export type IconName =
  | 'audio'
  | 'bell-on'
  | 'book'
  | 'brain'
  | 'briefcase'
  | 'calendar-day'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-up'
  | 'close'
  | 'download'
  | 'exclamation-mark'
  | 'exit'
  | 'facebook'
  | 'file'
  | 'happy'
  | 'happy-full'
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
  | 'phone'
  | 'question-mark'
  | 'search'
  | 'send'
  | 'twitter'
  | 'user-full'
  | 'user'
  | 'video'
  | 'wallet'
  | 'youtube';

type WrapperIconProps = IconProps & {
  name: IconName;
};

const iconMap: Record<IconName, (props: IconProps) => React.ReactNode> = {
  'bell-on': BellOnIcon,
  'calendar-day': CalendarDayIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-up': ChevronUpIcon,
  'exclamation-mark': ExclamationMarkIcon,
  'happy-full': HappyFullIcon,
  'question-mark': QuestionMarkIcon,
  'user-full': UserFullIcon,
  audio: AudioIcon,
  book: BookIcon,
  brain: BrainIcon,
  briefcase: BriefcaseIcon,
  close: CloseIcon,
  download: DownloadIcon,
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
  phone: PhoneIcon,
  search: SearchIcon,
  send: SendIcon,
  twitter: TwitterIcon,
  user: UserIcon,
  video: VideoIcon,
  wallet: WalletIcon,
  youtube: YoutubeIcon,
};

const Icon: React.FC<WrapperIconProps> = ({ name, ...props }) => {
  const Icon = iconMap[name] || UnknownIcon;
  return <Icon {...props} />;
};

export default Icon;
