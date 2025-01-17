export type TQuestionAnswer = {
  id: number;
  question: string;
  answer: string;
  status: 'active' | 'inactive';
  tags: string[];
  order: number;
  subcategoryId: number;
};

function parseQuestionAnswer(json: any): TQuestionAnswer {
  return {
    id: json?.id ?? 0,
    question: json?.question ?? '',
    answer: json?.answer ?? '',
    status: json?.status ?? 'inactive',
    tags: json?.tags?.split(',') ?? [],
    order: json?.order ?? 0,
    subcategoryId: json?.subcategory_id,
  };
}

function parseQuestionAnswers(json: any[]): TQuestionAnswer[] {
  return json.map(parseQuestionAnswer);
}

export const QuestionAnswer = { parse: parseQuestionAnswer, parseMany: parseQuestionAnswers };
