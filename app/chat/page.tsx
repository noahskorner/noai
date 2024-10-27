'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import { useEffect, useRef, useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const onMessageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Pop the message onto the stack
    const message = e.currentTarget.message.value;
    const updated: ChatCompletionMessageParam[] = [
      ...messages,
      { role: 'user', content: message },
    ];
    setMessages(updated);

    e.currentTarget.message.value = '';

    const openai = new OpenAI({
      baseURL: `${window.location.origin}/openai/v1`,
      apiKey: 'client',
      dangerouslyAllowBrowser: true,
    });
    const stream = await openai.chat.completions.create({
      model: 'llama3.2',
      stream: true,
      messages: updated,
    });
    let i = 0;
    for await (const chunk of stream) {
      console.log(chunk);
      //Create a new message with the response
      if (i === 0) {
        setMessages((prev) => {
          return [
            ...prev,
            {
              role: 'assistant',
              content: chunk.choices[0].delta.content,
            },
          ];
        });

        // Update the last message
      } else {
        setMessages((prev) => {
          const lastMessage = [...prev].pop();
          return [
            ...prev.slice(0, -1),
            {
              role: 'assistant',
              content: `${lastMessage?.content}${chunk.choices[0].delta.content}`,
            },
          ];
        });
      }
      i++;
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="flex h-full w-full flex-col items-stretch gap-4">
      <ScrollArea
        ref={scrollAreaRef}
        className="flex w-full grow items-center justify-center pr-4"
      >
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full max-w-3xl flex-col gap-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-4 ${message.role === 'user' ? 'ml-auto max-w-[75%] rounded-3xl bg-sidebar px-4 text-right' : 'text-left'}`}
              >
                {Array.isArray(message.content)
                  ? null
                  : message.content && (
                      <p className="text-sm leading-7 [&:not(:first-child)]:mt-6">
                        {message.content}
                      </p>
                    )}
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
      <div className="flex w-full grow-0 items-center justify-center">
        <form
          onSubmit={onMessageSubmit}
          className="h-14 w-full max-w-3xl rounded-3xl bg-sidebar px-8 text-sm shadow-2xl"
        >
          <input
            placeholder="Message"
            name="message"
            className="h-full w-full bg-sidebar placeholder-primary outline-none"
          ></input>
        </form>
      </div>
    </section>
  );
}
