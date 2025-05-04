'use client'

import * as React from 'react'
import { useRef, useEffect } from 'react'
import Script from 'next/script'
import { useTheme } from 'next-themes'

export function TickerTape() {
  const container = useRef<HTMLDivElement>(null)
  const { theme = 'light' } = useTheme();
  const colorTheme = theme === 'dark' ? 'dark' : 'light';
  const backgroundColor = theme === 'dark' ? '#1C1C1C' : '#fff';

  useEffect(() => {
    if (!container.current) return;

    // Clean up previous widget and scripts
    container.current.innerHTML = '';

    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: 'FOREXCOM:SPXUSD',
          title: 'S&P 500'
        },
        {
          proName: 'FOREXCOM:NSXUSD',
          title: 'US 100'
        },
        {
          description: 'EUR/USD',
          proName: 'FX:EURUSD'
        },
        {
          description: 'BTC/USD',
          proName: 'BITSTAMP:BTCUSD'
        },
        {
          description: 'AAPL',
          proName: 'NASDAQ:AAPL'
        }
      ],
      showSymbolLogo: true,
      colorTheme: colorTheme,
      isTransparent: false,
      displayMode: 'adaptive',
      locale: 'en',
      backgroundColor: backgroundColor
    });

    container.current.appendChild(script);

    return () => {
      if (container.current) {
        const scriptElement = container.current.querySelector('script')
        if (scriptElement) {
          container.current.removeChild(scriptElement)
        }
      }
    }
  }, [theme])

  return (
    <div
      className="tradingview-widget-container mb-2 md:min-h-20 min-h-28"
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright flex justify-end mr-2">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
          className="justify-end text-right"
        >
          <span className="">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  )
}
