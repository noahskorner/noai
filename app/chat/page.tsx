'use client';

import { useChat } from 'ai/react';
import { MarkdownRenderer } from '@/components/markdown-renderer';

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <section className="flex h-full w-full flex-col items-stretch gap-4">
      <div className="flex w-full grow items-stretch justify-center overflow-y-auto pr-4">
        <div className="flex w-full items-stretch justify-center">
          <div className="flex w-full max-w-3xl flex-col gap-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-4 ${message.role === 'user' ? 'ml-auto max-w-[75%] rounded-3xl bg-sidebar px-4 text-right' : 'text-left'}`}
              >
                {message.role === 'user' ? (
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    {message.content}
                  </p>
                ) : (
                  <MarkdownRenderer content={message.content} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full grow-0 items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="h-14 w-full max-w-3xl rounded-3xl bg-sidebar px-8"
        >
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Message"
            name="message"
            className="h-full w-full bg-sidebar placeholder-primary outline-none active:bg-sidebar"
          ></input>
        </form>
      </div>
    </section>
  );
}
