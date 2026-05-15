import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { REQUEST_TYPE_LABELS, VISIBILITY_LABELS } from '@/lib/types'

export const metadata = { title: 'You are not alone — Dorea' }

function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMinutes = Math.floor(diffMs / 60000)

  if (diffMinutes < 1) return 'just now'
  if (diffMinutes === 1) return '1 minute ago'
  if (diffMinutes < 60) return `${diffMinutes} minutes ago`
  return 'recently'
}

export default async function AcknowledgmentPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const session = await getSession()
  if (!session) notFound()

  const request = await db.request.findFirst({
    where: {
      id,
      member_id: session.memberId,
    },
  })

  if (!request) notFound()

  const typeLabel = REQUEST_TYPE_LABELS[request.request_type as keyof typeof REQUEST_TYPE_LABELS]
    ?? request.request_type

  const visibilityLabel = VISIBILITY_LABELS[request.visibility_level as keyof typeof VISIBILITY_LABELS]
    ?? request.visibility_level

  const receivedAt = formatRelativeTime(request.created_at)

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="h-1 w-full bg-dorea-700" />

      <div className="page-container space-y-6 pb-16">

        {/* Core acknowledgment — the emotional center */}
        <div className="pt-6 text-center space-y-3">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-dorea-50 border-2 border-dorea-100">
            <span className="text-4xl">🕊️</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-stone-900">
              You are not alone.
            </h1>
            <p className="text-stone-600 leading-relaxed max-w-xs mx-auto">
              Your request has been received. Someone from our community will reach out to you.
            </p>
          </div>
        </div>

        {/* What was submitted */}
        <div className="card space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-stone-500 uppercase tracking-wide">
                Your request
              </p>
              <p className="mt-1 text-lg font-medium text-stone-900">{typeLabel}</p>
              {request.description && (
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {request.description}
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-stone-100 pt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-stone-400">Received</p>
              <p className="font-medium text-stone-700 mt-0.5">{receivedAt}</p>
            </div>
            <div>
              <p className="text-stone-400">Visible to</p>
              <p className="font-medium text-stone-700 mt-0.5">{visibilityLabel}</p>
            </div>
          </div>
        </div>

        {/* Continuity promise */}
        <div className="rounded-2xl border border-dorea-100 bg-dorea-50 p-5 space-y-2">
          <p className="text-sm font-medium text-dorea-800">
            What happens next
          </p>
          <p className="text-sm text-dorea-700 leading-relaxed">
            A pastor or volunteer will reach out to you personally. You won&apos;t
            fall through the cracks — your request remains with us until it&apos;s
            resolved.
          </p>
        </div>

        {/* Continuity note */}
        <p className="text-center text-sm text-stone-500 leading-relaxed px-2">
          You&apos;ll hear from us. If you don&apos;t, please reach out again —
          you matter to this community.
        </p>

        {/* Actions */}
        <div className="space-y-3 pt-2">
          <Link href="/request/new" className="btn-primary block text-center">
            Share another request
          </Link>
        </div>

        {/* Emergency footer */}
        <p className="text-center text-xs text-stone-400 pt-2 leading-relaxed px-4">
          If this is an emergency, please call <strong>911</strong> or your local
          crisis line immediately. Dorea is not a replacement for emergency services.
        </p>

      </div>
    </main>
  )
}
