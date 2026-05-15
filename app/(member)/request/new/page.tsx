import { getSession } from '@/lib/auth'
import RequestForm from './RequestForm'

export const metadata = { title: 'Share a Request — Dorea' }

export default async function NewRequestPage() {
  const session = await getSession()

  return (
    <main className="min-h-screen">
      <div className="h-1 w-full bg-dorea-700" />

      <div className="page-container space-y-6 pb-16">

        {/* Header */}
        <div className="pt-2 space-y-1">
          <h1 className="text-2xl font-semibold text-stone-900">
            How can we support you?
          </h1>
          {session && (
            <p className="text-stone-500 text-sm">
              Hello, {session.firstName}. Your community is here for you.
            </p>
          )}
        </div>

        {/* Form */}
        <RequestForm />

        {/* Footer */}
        <p className="text-center text-xs text-stone-400 pt-4">
          Everything you share is handled with care and confidentiality.
        </p>

      </div>
    </main>
  )
}
