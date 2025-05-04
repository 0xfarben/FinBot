'use client'

import React, { useEffect, useRef, memo } from 'react'
import { useTheme } from 'next-themes'

type ComparisonSymbolObject = {
  symbol: string;
  position: "SameScale";
};

export function StockChart({ symbol, comparisonSymbols, forceLightTheme = false }: { symbol: string, comparisonSymbols: ComparisonSymbolObject[], forceLightTheme?: boolean }) {
  const container = useRef<HTMLDivElement>(null)
  const { theme = 'light' } = useTheme();
  const colorTheme = forceLightTheme ? 'light' : (theme === 'dark' ? 'dark' : 'light');
  const backgroundColor = forceLightTheme ? '#fff' : (theme === 'dark' ? '#1C1C1C' : '#fff');
  const gridColor = forceLightTheme ? 'rgba(230, 230, 230, 0)' : (theme === 'dark' ? 'rgba(42, 46, 57, 0)' : 'rgba(230, 230, 230, 0)');

  useEffect(() => {
    if (!container.current) return
    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: colorTheme,
      style: comparisonSymbols.length === 0 ? '1' : '2',
      hide_volume: comparisonSymbols.length === 0 ? false : true,
      locale: 'en',
      backgroundColor: backgroundColor,
      gridColor: gridColor,
      withdateranges: true,
      hide_side_toolbar: comparisonSymbols.length > 0 ? true : false,
      allow_symbol_change: true,
      compareSymbols: comparisonSymbols,
      calendar: false,
      hide_top_toolbar: true,
      support_host: 'https://www.tradingview.com'
    })

    container.current.appendChild(script)

    return () => {
      if (container.current) {
        container.current.removeChild(script)
      }
    }
  }, [symbol, comparisonSymbols, colorTheme, backgroundColor, gridColor])

  return (
    <div style={{ height: '500px' }}>
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: '100%', width: '100%' }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: 'calc(100% - 32px)', width: '100%' }}
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default memo(StockChart)
