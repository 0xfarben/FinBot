import { UseChatHelpers } from 'ai/react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold text-foreground">
          Welcome to <span className="underline">FinBot</span> powered by <a className="underline" href="https://finforesight.dev">FinForesight</a>!
        </h1>
        <p className="leading-normal text-sm text-muted-foreground">
          Your AI-powered financial analysis assistant for real-time market insights and stock analysis.{' '}
          <span className="text-muted-foreground">
            Built with{' '}
            <ExternalLink href="https://sdk.vercel.ai" className="text-primary hover:text-primary/80">
              Vercel AI SDK
            </ExternalLink>
            <ExternalLink href="https://tradingview.com" className="text-primary hover:text-primary/80">
              , TradingView Widgets
            </ExternalLink>
            , and powered by{' '}
            <ExternalLink href="https://groq.com" className="text-primary hover:text-primary/80">
              Advanced AI Models
            </ExternalLink>
          </span>
        </p>
      </div>
    </div>
  )
}
