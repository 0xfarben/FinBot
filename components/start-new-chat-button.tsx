'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function StartNewChatButton() {
  return (
    <a
      href="/new"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'transition-all duration-300 relative group',
        'ml-3 px-6 py-2 rounded-none skew-x-[-30deg]',
        'border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100',
        'dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800'
      )}
    >
      <span className="flex relative skew-x-[30deg] font-medium">
        <span 
          className="absolute inset-0 w-full h-full bg-[#6C5DD3] opacity-0 group-hover:opacity-20 transition-opacity duration-300 skew-x-[-30deg]" 
        ></span>
        Start New Chat
      </span>
    </a>
  )
} 