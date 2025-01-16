import '#app/app.scss'

import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes, StaticRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { HomePage } from '#app/pages/home'
import { ArticlePage } from '#app/pages/article'
import { ArticlesPage } from '#app/pages/articles'
import { NotFoundPage } from '#app/pages/not-found'

/**
 * Tell vite the existence of any other assets that
 * you want to be available in your static server.
 */
import.meta.glob(['./assets/img/**'])

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:id" element={<ArticlePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export function App(props?: { url?: string }) {
  const queryClient = new QueryClient()
  const isServer = typeof window === 'undefined'
  const Router = isServer ? StaticRouter : BrowserRouter

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router location={props.url || window.location.pathname}>
          <AppRoutes />
        </Router>
      </QueryClientProvider>
    </StrictMode>
  )
}

export function createApp(url?: string) {
  return <App url={url} />
}
