import { format } from 'date-fns'
import { useParams } from 'react-router'
import { Footer } from '#app/components/footer'
import { Header } from '#app/components/header'
import { Spinner } from '#app/components/spinner'
import { useGetArticleById } from '#app/hooks/api'
import { NotFoundPage } from '#app/pages/not-found'
import { FiCalendar, FiClock } from 'react-icons/fi'
import { InternalErrorPage } from '#app/pages/internal-error'

export function ArticlePage() {
  const { id } = useParams()
  const { data, error, isError, isLoading } = useGetArticleById({ id })

  if (isError) {
    if (error.statusCode === 404) {
      return <NotFoundPage />
    }

    return <InternalErrorPage />
  }

  return (
    <main className="section mx-auto max-w-3xl">
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <article>
          <h1 className="font-bold text-4xl mb-6">{data.data.title}</h1>

          <div className="flex flex-wrap text-sm items-center text-[color:--info]">
            <span className="font-bold text-xl mr-2">
              <FiCalendar className="basis-full" />
            </span>
            <time className="mr-4">{format(data.data.created_at, 'PP')}</time>

            <span className="font-bold text-xl mr-2">
              <FiClock className="basis-full" />
            </span>
            <span className="mr-4">{data.data.read_time}</span>

            {data.data.updated_at > data.data.created_at ? (
              <i>* edited at {format(data.data.updated_at, 'P')}</i>
            ) : (
              ''
            )}
          </div>

          <div
            className="text-lg text-[color:--body] mt-16 mr-0 mb-12 ml-0"
            dangerouslySetInnerHTML={{ __html: data.data.content }}
          ></div>
        </article>
      )}
      <Footer />
    </main>
  )
}
