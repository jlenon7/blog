import '#app/app.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { HomePage } from '#app/pages/home'
import { ArticlePage } from '#app/pages/article'
import { ArticlesPage } from '#app/pages/articles'
import { NotFoundPage } from '#app/pages/not-found'

/**
 * Tell vite the existence of any other assets that
 * you want to be available in your static server.
 */
import.meta.glob(['./img/**'])

function App() {
  const queryClient = new QueryClient()

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<App />)
