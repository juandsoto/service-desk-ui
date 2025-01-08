import type { IconName } from '../components/Icon';
import type { TQuestionAnswer } from './QuestionAnswer';
import { QuestionAnswer } from './QuestionAnswer';

export type TSubCategory = {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  link: string;
  icon: IconName | null;
  status: 'active' | 'inactive';
  tags: string[];
  order: number;
  questions: TQuestionAnswer[];
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  deleteAt: Date | null;
};

function parseSubCategory(json: any): TSubCategory {
  return {
    id: json?.id ?? 0,
    title: json?.title ?? '',
    description: json?.description ?? '',
    shortDescription: json?.short_description ?? '',
    link: json?.link ?? '',
    icon: json?.icon ?? null,
    status: json?.status ?? 'inactive',
    tags: json?.tags?.split(',') ?? [],
    order: json?.order ?? 0,
    questions: QuestionAnswer.parseMany(json?.questionsanswers),
    categoryId: json?.category_id ?? 0,
    createdAt: json?.created_at ?? new Date(),
    updatedAt: json?.updated_at ?? new Date(),
    deleteAt: json?.delete_at ?? null,
  };
}

function parseSubCategories(json: any[]): TSubCategory[] {
  return json.map(parseSubCategory);
}

export const SubCategory = { parse: parseSubCategory, parseMany: parseSubCategories };
