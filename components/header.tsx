import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconGroq,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { Session } from '@/lib/types'
import { StartNewChatButton } from './start-new-chat-button'
import { ThemeToggle } from './theme-toggle'

async function UserOrLogin() {
  return (
    <>
      <Link href="/" rel="nofollow" className="flex items-center group">
        <div className="relative">
          <Image
            src="/finforesight-logo.png"
            alt="FinForesight Logo"
            width={50}
            height={50}
            className="drop-shadow-[0_0_15px_rgba(108,93,211,0.5)] hover:drop-shadow-[0_0_20px_rgba(108,93,211,0.7)] transition-all duration-300"
          />
        </div>
        <span className="ml-1 text-xl font-semibold text-zinc-900 dark:text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300">
          FinBot
        </span>
      </Link>

      <div className="flex items-center font-semibold">
        {/* <IconSeparator className="size-6 text-muted-foreground/50" /> */}
        {/* <a href="/new">StockBot</a> */}
        <IconSeparator className="size-6 text-muted-foreground/50" />
        <StartNewChatButton />
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-background border-border">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <ThemeToggle />
        <a
          target="_blank"
          href="https://finforesight.dev"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }), "text-primary hover:text-primary/80")}
        >
          <span className="flex">Visit FinForesight</span>
        </a>
      </div>
    </header>
  )
}
