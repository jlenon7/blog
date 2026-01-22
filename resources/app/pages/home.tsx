import { FiBriefcase } from 'react-icons/fi'
import { Footer } from '#app/components/footer'
import { Header } from '#app/components/header'
import { Spinner } from '#app/components/spinner'
import { useGetExperiences } from '#app/hooks/api'
import { InternalErrorPage } from '#app/pages/internal-error'

export function HomePage() {
  const { data, isError, isLoading } = useGetExperiences()

  if (isError) {
    return <InternalErrorPage />
  }

  return (
    <main className="section mx-auto max-w-3xl">
      <Header
        title="Software engineer, builder and amateur calisthenic"
        description="I'm Lenon, a passionate software engineer with seven
          years of experience building scalable full-stack applications,
          including AI monitoring tools, Resale-as-a-Service platforms, and
          high-performance microservices. Known for a collaborative
          approach and a strong drive to create maintainable, efficient
          code, I prioritize simplicity and reusability in all projects.
          Skilled in breaking down complex problems and facilitating teamwork,
          I've done contributions to Node.js project and maintain open-source
          packages on NPM, such as Athenna Framework, to support developer
          productivity across the community."
      />
      <h2 className="flex text-3xl font-bold mb-4 text-[color:--heading]">
        <FiBriefcase className="w-10 h-10" />
        <span className="mt-1 ml-3">Work experience</span>
      </h2>
      <div className="px-4 border rounded-2xl dark:border-zinc-700/40">
        <ol className="m-4 space-y-4">
          {isLoading ? (
            <Spinner />
          ) : (
            data?.data?.map(experience => {
              return (
                <li className="flex gap-4" key={experience.id}>
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    {experience.base64_company_logo ? (
                      <img
                        className="w-7 h-7 rounded-full"
                        src={experience.base64_company_logo}
                        alt="Company Logo"
                      />
                    ) : (
                      ''
                    )}
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {experience.company}
                    </dd>

                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                      {experience.role}
                    </dd>

                    <dt className="sr-only">Start - End Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                      <time>{experience.start_date_formatted}</time>
                      <span aria-hidden="true"> - </span>
                      <time>{experience.end_date_formatted}</time>
                      <span aria-hidden="true"> - </span>
                      <time>{experience.duration}</time>
                    </dd>
                  </dl>
                </li>
              )
            })
          )}
        </ol>
      </div>
      <Footer />
    </main>
  )
}
