export type ErrorResponse = {
  statusCode: number
  code: string
  name: string
  message: string
  stack?: string
  help?: string
}

export type SuccessResponse<T = unknown> = {
  statusCode: number
  data?: T
}

export type PaginatedResponse<T = unknown> = {
  data?: T[]
  meta?: {
    totalItems: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
    itemCount: number
  }
  links?: {
    next: string
    previous: string
    last: string
    first: string
  }
}

export type Article = {
  id: string
  title: string
  read_time: string
  description: string
  content_path: string
  content: string
  created_at: string
  updated_at: string
  deleted_at: string
}

export type Experience = {
  id: string
  role: string
  company: string
  base64_company_logo: string
  start_date: Date
  end_date: Date
  created_at: Date
  updated_at: Date
  deleted_at: Date
  duration: string
  end_date_formatted: string
  start_date_formatted: string
}
