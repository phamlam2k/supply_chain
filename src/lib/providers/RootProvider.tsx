'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AntdRegistry } from '@ant-design/nextjs-registry'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error: any) => {
        if (failureCount > 1) {
          return false
        }

        if (!error.response) return false

        if (error.response && error.response.status === 401) return true
        else return false
      },
      staleTime: 1000 * 60 * 60 * 24,
      networkMode: 'always',
      retryDelay: 1000
    },
    mutations: {
      retry: (failureCount, error: any) => {
        if (failureCount > 1) {
          return false
        }

        if (!error.response) return false

        if (error.response.status === 401) return true
        else return false
      },
      retryDelay: 1000,
      networkMode: 'always'
    }
  }
})

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntdRegistry>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AntdRegistry>
  )
}

export default RootProvider
