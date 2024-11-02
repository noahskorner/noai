'use client';

import { useChat } from 'ai/react';
import { MarkdownRenderer } from '@/components/markdown-renderer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [focused, setIsFocused] = useState(false);

  return (
    <section className="flex h-full w-full flex-col items-stretch pt-4">
      <div className="flex w-full grow items-stretch justify-center overflow-y-auto pr-4">
        <div className="flex w-full max-w-3xl flex-col gap-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 ${message.role === 'user' ? 'ml-auto max-w-[75%] rounded-3xl bg-accent px-6 text-accent-foreground' : 'text-left'}`}
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
      <div className="flex w-full grow-0 items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className={`animate-shimmer h-16 w-full max-w-3xl rounded-full from-pink-500 via-blue-500 to-blue-400 p-[2px] transition-colors ${focused ? 'bg-gradient-to-r' : ''}`}
        >
          <div className="flex h-full w-full items-center justify-between gap-2 rounded-full border bg-accent px-2">
            <input
              value={input}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Message"
              name="message"
              autoComplete="off" // Disable autocomplete
              className="h-full w-full rounded-full bg-transparent pl-4 leading-7 placeholder-primary outline-none backdrop-blur-lg active:bg-transparent"
            ></input>
            <Button className="rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
