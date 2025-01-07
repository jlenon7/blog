import { useState } from 'react'
import { Link } from 'react-router'
import { Footer } from '#app/components/footer'
import { Header } from '#app/components/header'
import { useGetArticles } from '#app/hooks/api'
import { Spinner } from '#app/components/spinner'
import { FiCalendar, FiChevronRight } from 'react-icons/fi'
import { InternalErrorPage } from '#app/pages/internal-error'

export function ArticlesPage() {
  const [page, setPage] = useState(0)
  const { data, isError, isLoading } = useGetArticles({ page })

  if (isError) {
    return <InternalErrorPage />
  }

  return (
    <main className="section mx-auto max-w-3xl">
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        data.data.data.map(article => {
          return (
            <Link
              to={`/articles/${article.id}`}
              className="block"
              key={article.id}
            >
              <strong className="block text-2xl transition-colors text-[color:--heading] hover:text-[color:--highlight]">
                <span>{article.title}</span>
                <span className="inline-block align-middle">
                  <FiChevronRight className="relative bottom-[0.5px]" />
                </span>
              </strong>
              <p className="text-[color:--body] mt-2 mb-6 leading-6">
                {article.description}
              </p>
              <div className="mb-4 flex text-sm items-center text-[color:--info]">
                <span className="mr-2">
                  <FiCalendar className="w-6 h-6" />
                </span>
                <time className="mr-4">{article.created_at}</time>
              </div>
            </Link>
          )
        })
      )}
      {data?.data?.meta?.currentPage + 1 < data?.data?.meta?.totalPages ? (
        <button
          onClick={() => setPage(page + 1)}
          className="text-[color:--highlight] font-semibold text-[1.2rem] !mt-12 !mb-10 transition-transform duration-200 hover:-translate-y-1"
        >
          Next Page
        </button>
      ) : (
        ''
      )}
      <Footer />
    </main>
  )
}
