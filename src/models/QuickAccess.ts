import type { IconName } from '@components/Icon';

export type TQuickAccess = {
  id: number;
  title: string;
  link: string;
  icon: IconName;
  status: 'active' | 'inactive';
  tags: string[];
  order: number;
};

function parseQuickAccess(json: any): TQuickAccess {
  return {
    id: json?.id ?? 0,
    title: json?.title ?? '',
    link: json?.link ?? '',
    icon: json?.icon ?? '',
    status: json?.status ?? 'inactive',
    tags: json?.tags ?? [],
    order: json?.order ?? 0,
  };
}

function parseQuickAccesses(json: any[]): TQuickAccess[] {
  return json.map(parseQuickAccess);
}

export const QuickAccess = { parse: parseQuickAccess, parseMany: parseQuickAccesses };
