import '../lib/dayjs'

import { QueryClientProvider } from '@tanstack/react-query'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { queryClient } from '~/lib/react-query'

import './globals.css'

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.ignite-call.rocketseat.com.br',
          siteName: 'Ignite Call JX',
        }}
      />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
