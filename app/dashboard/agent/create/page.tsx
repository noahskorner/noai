'use client'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
  ChatCompletionCreateParams,
  ChatCompletionMessageParam,
} from 'openai/resources'

const SYSTEM_PROMPT_PLACEHOLDER = `You are a helpful assistant knowledgeable about technology and programming. Your goal is to provide clear, concise, and accurate answers to users' questions while encouraging a positive and engaging interaction. Always ask follow-up questions to ensure the user's needs are met.`
const USER_PROMPT_PLACEHOLDER = `Can you explain the difference between a framework and a library in software development?`

export default function CreateAgentPage() {
  const [chat, setChat] = useState<ChatCompletionCreateParams>({
    model: 'llama3.2',
    messages: [
      {
        role: 'system',
        content: '',
      },
    ],
  })
  const [message, setMessage] = useState<ChatCompletionMessageParam>({
    role: 'user',
    content: '',
  })

  const onSystemPromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChat((prev) => ({
      ...prev,
      messages: [
        {
          role: 'system',
          content: e.target.value,
        },
        ...prev.messages.slice(1),
      ],
    }))
  }

  const onRoleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setMessage(
      (prev) =>
        ({
          role: prev.role === 'user' ? 'assistant' : 'user',
          content: prev.content,
        }) as ChatCompletionMessageParam
    )
  }

  const onAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setChat((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }

  return (
    <div className="w-full h-[calc(100vh-7rem)] relative">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 flex-col">
          <Label htmlFor="system" className="text-md">
            System
          </Label>
          <Textarea
            id="system"
            placeholder={SYSTEM_PROMPT_PLACEHOLDER}
            value={chat.messages[0].content as string | undefined}
            onChange={onSystemPromptChange}
          />
        </div>
        {chat.messages.slice(1).map((message, index) => {
          return (
            <div key={index} className="flex gap-2 flex-col">
              <Label className="text-md capitalize">{message.role}</Label>
              <Textarea value={message.content as string | undefined} />
            </div>
          )
        })}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <form>
          <div className="flex flex-col gap-4 min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <textarea
              className="w-full h-full flex flex-col gap-4 min-h-[80px] w-full rounded-md bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder={USER_PROMPT_PLACEHOLDER}
            />
            <div className="flex justify-between items-center">
              <div>
                <Button className="capitalize" onClick={onRoleClick}>
                  {message.role}
                </Button>
              </div>
              <div className="flex gap-2">
                <Button onClick={onAddClick}>Add</Button>
                <Button>Run</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
