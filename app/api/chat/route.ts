import { getUser } from '@/app/settings/get-user.action';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages } from 'ai';

export async function POST(req: Request) {
  const user = await getUser();
  if (user == null) return new Response('Unauthorized', { status: 401 });

  const { messages } = await req.json();

  const openai = createOpenAI({
    baseURL: user.host,
    apiKey: 'ollama',
  });

  const result = await streamText({
    model: openai('llama3.2'),
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
