import type { IconName } from '@components/Icon';
import { SubCategory, type TSubCategory } from './SubCategory';

export type TCategory = {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  link: string;
  icon: IconName;
  status: 'active' | 'inactive';
  tags: string[];
  order: number;
  subCategories?: TSubCategory[];
  createdAt: Date;
  updatedAt: Date;
  deleteAt: Date | null;
};

function parseCategory(json: any): TCategory {
  return {
    id: json?.id ?? 0,
    title: json?.title ?? '',
    description: json?.description ?? '',
    shortDescription: json?.short_description ?? '',
    link: json?.link ?? '',
    icon: json?.icon ?? '',
    status: json?.status ?? 'inactive',
    tags: json?.tags?.split(',') ?? [],
    order: json?.order ?? 0,
    subCategories: SubCategory.parseMany(json?.subCategories),
    createdAt: json?.created_at ?? new Date(),
    updatedAt: json?.updated_at ?? new Date(),
    deleteAt: json?.delete_at ?? null,
  };
}

function parseCategories(json: any[]): TCategory[] {
  return json?.map(parseCategory);
}

export const Category = { parse: parseCategory, parseMany: parseCategories };
