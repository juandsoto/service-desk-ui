import {
  BellOnIcon,
  BriefcaseIcon,
  CalendarDayIcon,
  ChevronDownIcon,
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
  LoaderIcon,
  PlusIcon,
  TrashIcon,
} from '../icons';
import type { IconProps } from '../icons/constants';

export type IconName =
  | 'audio'
  | 'bell-on'
  | 'book'
  | 'brain'
  | 'briefcase'
  | 'calendar-day'
  | 'chevron-down'
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
  | 'loader'
  | 'lock'
  | 'menu'
  | 'messages'
  | 'minimize'
  | 'paperclip'
  | 'phone'
  | 'plus'
  | 'question-mark'
  | 'search'
  | 'send'
  | 'trash'
  | 'twitter'
  | 'user-full'
  | 'user'
  | 'video'
  | 'wallet'
  | 'youtube';

type WrapperIconProps = IconProps & {
  name: IconName | null;
};

const iconMap: Record<IconName, (props: IconProps) => React.ReactNode> = {
  'bell-on': BellOnIcon,
  'calendar-day': CalendarDayIcon,
  'chevron-down': ChevronDownIcon,
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
  loader: LoaderIcon,
  plus: PlusIcon,
  trash: TrashIcon,
};

export const PUBLIC_ICON_NAMES: IconName[] = [
  ...new Set<IconName>([
    'bell-on',
    'calendar-day',
    'exclamation-mark',
    'happy-full',
    'question-mark',
    'user-full',
    'audio',
    'book',
    'brain',
    'briefcase',
    'download',
    'file',
    'happy',
    'heart',
    'home',
    'info',
    'lock',
    'messages',
    'paperclip',
    'phone',
    'search',
    'send',
    'trash',
    'user',
    'video',
    'wallet',
  ]),
];

const Icon: React.FC<WrapperIconProps> = ({ name, ...props }) => {
  const Icon = name === null ? null : iconMap[name] || UnknownIcon;

  if (Icon === null) return null;

  return <Icon {...props} />;
};

export default Icon;
