import { Header } from '#app/components/header'
import { FiAlertOctagon } from 'react-icons/fi'

export function NotFoundPage() {
  return (
    <main className="section mx-auto max-w-3xl">
      <Header />
      <h2 className="flex text-4xl font-bold mb-4 text-[color:--heading]">
        <FiAlertOctagon className="mt-0.5 w-9 h-9" />
        <span className="ml-3">Page Not Found</span>
      </h2>
    </main>
  )
}
