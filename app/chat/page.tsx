'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { useChat } from 'ai/react';

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <section className="flex h-full w-full flex-col items-stretch gap-4">
      <ScrollArea className="flex w-full grow items-center justify-center pr-4">
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
          onSubmit={handleSubmit}
          className="h-14 w-full max-w-3xl rounded-3xl bg-sidebar px-8 text-sm shadow-2xl"
        >
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Message"
            name="message"
            className="h-full w-full bg-sidebar placeholder-primary outline-none"
          ></input>
        </form>
      </div>
    </section>
  );
}
