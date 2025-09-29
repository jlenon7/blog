import type {
  Article,
  Experience,
  ErrorResponse,
  SuccessResponse,
  PaginatedResponse
} from '#app/types'
import { useQuery } from '@tanstack/react-query'

export function useGetArticles(options: { page: number }) {
  const route = '/api/v1/articles'

  return useQuery<SuccessResponse<PaginatedResponse<Article>>, ErrorResponse>({
    queryKey: [route, options.page],
    queryFn: async () => {
      const response = await fetch(route)
      const data = await response.json()

      if (data.statusCode !== 200) {
        throw data
      }

      return data
    }
  })
}

export function useGetArticleById(options: { id: string }) {
  const route = `/api/v1/articles/${options.id}`

  return useQuery<SuccessResponse<Article>, ErrorResponse>({
    queryKey: [route],
    queryFn: async () => {
      const response = await fetch(route)
      const data = await response.json()

      if (data.statusCode !== 200) {
        throw data
      }

      return data
    }
  })
}

export function useGetExperiences() {
  const route = '/api/v1/experiences'

  return useQuery<SuccessResponse<Experience[]>, ErrorResponse>({
    queryKey: [route],
    queryFn: async () => {
      const response = await fetch(route)
      const data = await response.json()

      if (data.statusCode !== 200) {
        throw data
      }

      return data
    }
  })
}

export function useGetExperienceById(options: { id: string }) {
  const route = `/api/v1/experiences/${options.id}`

  return useQuery<SuccessResponse<Experience>, ErrorResponse>({
    queryKey: [route],
    queryFn: async () => {
      const response = await fetch(route)
      const data = await response.json()

      if (data.statusCode !== 200) {
        throw data
      }

      return data
    }
  })
}
