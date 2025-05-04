'use client'

import * as React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import { useActions, useUIState } from 'ai/rsc'

import { UserMessage } from './stocks/message'
import { type AI } from '@/lib/chat/actions'
import { Button } from '@/components/ui/button'
import { IconArrowDown, IconPlus } from '@/components/ui/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'

import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import { useTheme } from 'next-themes'

export function PromptForm({
  input,
  setInput
}: {
  input: string
  setInput: (value: string) => void
}) {
  const router = useRouter()
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const { submitUserMessage } = useActions()
  const [_, setMessages] = useUIState<typeof AI>()
  const [apiKey, setApiKey] = useLocalStorage('groqKey', '')
  const { theme } = useTheme()

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <form
      ref={formRef}
      onSubmit={async (e: any) => {
        e.preventDefault()
        // Blur focus on mobile
        if (window.innerWidth < 600) {
          e.target['message']?.blur()
        }
        const value = input.trim()
        setInput('')
        if (!value) return
        // Optimistically add user message UI
        setMessages(currentMessages => [
          ...currentMessages,
          {
            id: nanoid(),
            display: <UserMessage>{value}</UserMessage>
          }
        ])
        // Submit and get response message
        const responseMessage = await submitUserMessage(value, apiKey)
        setMessages(currentMessages => [...currentMessages, responseMessage])
      }}
      className="w-full"
    >
      <div className="relative mx-auto max-w-xl w-full bg-white border border-zinc-200 shadow-sm rounded-xl flex items-start min-h-[56px] px-3 py-3 mt-6 dark:bg-zinc-900 dark:border-zinc-800">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-3 top-3 rounded-full bg-white border-zinc-200 p-0 w-8 h-8 flex items-center justify-center hover:bg-zinc-100 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = '/new'
              }}
            >
              <IconPlus className="text-primary" />
              <span className="sr-only">New Chat</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-white text-primary border-zinc-200 dark:bg-zinc-900 dark:text-primary dark:border-zinc-800">Start New Chat</TooltipContent>
        </Tooltip>
        <div className="flex flex-row w-full items-start">
          <TextareaAutosize
            ref={inputRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            placeholder="Send a message."
            className="flex-1 min-h-[40px] max-h-40 resize-none bg-transparent border-0 shadow-none outline-none pl-12 pr-2 py-0 sm:text-sm text-zinc-900 placeholder:text-zinc-400 dark:text-white dark:placeholder:text-zinc-400 align-middle overflow-y-auto"
            autoFocus
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            name="message"
            rows={1}
            maxRows={6}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <div className="flex items-start ml-2 mt-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={input === ''} 
                  className={`rounded-full border-0 w-8 h-8 flex items-center justify-center ${
                    input === ''
                      ? theme === 'dark'
                        ? 'bg-zinc-700 text-white'
                        : 'bg-zinc-200 text-zinc-400'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  <div className="rotate-180">
                    <IconArrowDown />
                  </div>
                  <span className="sr-only">Send message</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-primary border-zinc-200 dark:bg-zinc-900 dark:text-primary dark:border-zinc-800">Send message</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </form>
  )
}
