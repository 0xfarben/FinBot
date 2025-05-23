import * as React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { PromptForm } from '@/components/prompt-form'
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { IconShare } from '@/components/ui/icons'
import { FooterText } from '@/components/footer'
import { useAIState, useActions, useUIState } from 'ai/rsc'
import type { AI } from '@/lib/chat/actions'
import { nanoid } from 'nanoid'
import { UserMessage } from './stocks/message'

export interface ChatPanelProps {
  id?: string
  title?: string
  input: string
  setInput: (value: string) => void
  isAtBottom: boolean
  scrollToBottom: () => void
}

export function ChatPanel({
  id,
  title,
  input,
  setInput,
  isAtBottom,
  scrollToBottom
}: ChatPanelProps) {
  const [aiState] = useAIState()
  const [messages, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()

  const exampleMessages = [
    {
      heading: 'What is the price',
      subheading: 'of Apple Inc.?',
      message: 'What is the price of Apple stock?'
    },
    {
      heading: 'Show me a stock chart',
      subheading: 'for $GOOGL',
      message: 'Show me a stock chart for $GOOGL'
    },
    {
      heading: 'What are some recent',
      subheading: `events about Amazon?`,
      message: `What are some recent events about Amazon?`
    },
    {
      heading: `What are Microsoft's`,
      subheading: 'latest financials?',
      message: `What are Microsoft's latest financials?`
    },
    {
      heading: 'How is the stock market',
      subheading: 'performing today by sector?',
      message: `How is the stock market performing today by sector?`
    },
    {
      heading: 'Show me a screener',
      subheading: 'to find new stocks',
      message: 'Show me a screener to find new stocks'
    }
  ]

  interface ExampleMessage {
    heading: string
    subheading: string
    message: string
  }

  const [randExamples, setRandExamples] = useState<ExampleMessage[]>([])

  useEffect(() => {
    const shuffledExamples = [...exampleMessages].sort(
      () => 0.5 - Math.random()
    )
    setRandExamples(shuffledExamples)
  }, [])

  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-transparent">
      <ButtonScrollToBottom
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />

      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
          {messages.length === 0 &&
            randExamples.map((example, index) => (
              <div
                key={example.heading}
                className={
                  `cursor-pointer rounded-lg border bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-100
                  dark:bg-zinc-900 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-800
                  p-4
                  ${index >= 4 ? 'hidden md:block' : ''}
                  ${index >= 2 ? 'hidden 2xl:block' : ''}`
                }
                onClick={async () => {
                  setMessages(currentMessages => [
                    ...currentMessages,
                    {
                      id: nanoid(),
                      display: <UserMessage>{example.message}</UserMessage>
                    }
                  ])

                  const responseMessage = await submitUserMessage(
                    example.message
                  )
                  setMessages(currentMessages => [
                    ...currentMessages,
                    responseMessage
                  ])
                }}
              >
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">{example.heading}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  {example.subheading}
                </div>
              </div>
            ))}
        </div>

        <div className="space-y-4 border-t bg-white border-zinc-200 shadow-lg sm:rounded-t-xl sm:border md:py-4 dark:bg-zinc-900 dark:border-zinc-800">
          <PromptForm input={input} setInput={setInput} />
          <FooterText className="hidden sm:block text-zinc-500 dark:text-zinc-400" />
        </div>
      </div>
    </div>
  )
}
