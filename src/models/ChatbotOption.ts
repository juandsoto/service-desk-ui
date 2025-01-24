export type TChatbotOption = {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'inactive';
  parent: number | null;
  children: TChatbotOption[];
  createdAt: Date;
  updatedAt: Date;
};

function parseChatbotOption(json: any): TChatbotOption {
  return {
    id: json?.id ?? 0,
    title: json?.title ?? '',
    description: json?.description ?? '',
    status: json?.status ?? 'inactive',
    parent: json?.parent ?? null,
    children: json?.children?.length > 0 ? json.children.map(parseChatbotOption) : [],
    createdAt: json?.created_at ?? new Date(),
    updatedAt: json?.updated_at ?? new Date(),
  };
}

function parseChatbotOptions(json: any[]): TChatbotOption[] {
  return json?.map(parseChatbotOption);
}

export const ChatbotOption = { parse: parseChatbotOption, parseMany: parseChatbotOptions };
