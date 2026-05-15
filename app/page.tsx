import Link from 'next/link'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function WelcomePage() {
  const session = await getSession()
  if (session) redirect('/request/new')

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header mark */}
      <div className="h-1 w-full bg-dorea-700" />

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm space-y-8 text-center">

          {/* Brand */}
          <div className="space-y-2">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-dorea-700">
              <span className="text-3xl">🕊️</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
              Dorea
            </h1>
            <p className="text-base text-stone-500">
              A place where no one is left alone.
            </p>
          </div>

          {/* Value statement */}
          <div className="rounded-2xl bg-white p-6 shadow-sm text-left space-y-3">
            <p className="text-stone-700 leading-relaxed">
              Your community is here for you — for prayer, support, encouragement,
              and practical help.
            </p>
            <p className="text-stone-500 text-sm leading-relaxed">
              Reach out whenever you need. Someone will always respond.
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Link href="/login" className="btn-primary block text-center">
              Sign in
            </Link>
            <Link href="/register" className="btn-ghost block text-center">
              Join your community
            </Link>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 py-6 text-center">
        <p className="text-xs text-stone-400">
          Dorea is a ministry support network, not a replacement for emergency
          services. If you are in immediate danger, call 911.
        </p>
      </footer>
    </main>
  )
}
