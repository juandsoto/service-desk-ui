export type TChatbotMessage = {
  id: number;
  messageType: string;
  message: string;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
};

function parseChatbotMessage(json: any): TChatbotMessage {
  return {
    id: json?.id ?? 0,
    messageType: json?.message_type ?? '',
    message: json?.message ?? '',
    status: json?.status ?? 'inactive',
    createdAt: json?.created_at ?? new Date(),
    updatedAt: json?.updated_at ?? new Date(),
  };
}

function parseChatbotMessages(json: any[]): TChatbotMessage[] {
  return json?.map(parseChatbotMessage);
}

export const ChatbotMessage = { parse: parseChatbotMessage, parseMany: parseChatbotMessages };
