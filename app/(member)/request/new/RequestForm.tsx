'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import type { RequestType, UrgencyLevel, VisibilityLevel } from '@/lib/types'

type RequestTypeOption = {
  value: RequestType
  label: string
  description: string
  emoji: string
}

const REQUEST_TYPES: RequestTypeOption[] = [
  {
    value: 'prayer_request',
    label: 'Prayer Request',
    description: "I'd like prayer from my community",
    emoji: '🙏',
  },
  {
    value: 'emotional_support',
    label: 'Emotional Support',
    description: "I'm going through something difficult",
    emoji: '💙',
  },
  {
    value: 'practical_need',
    label: 'Practical Need',
    description: 'I need practical help',
    emoji: '🤝',
  },
  {
    value: 'escalation',
    label: 'Urgent Concern',
    description: 'I need help right now',
    emoji: '⚡',
  },
]

type VisibilityOption = {
  value: VisibilityLevel
  label: string
  description: string
}

const VISIBILITY_OPTIONS: VisibilityOption[] = [
  {
    value: 'leaders',
    label: 'Pastors & volunteers',
    description: 'Only your care team will see this',
  },
  {
    value: 'private',
    label: 'Private — leaders only',
    description: 'Only an assigned leader will see this',
  },
  {
    value: 'community',
    label: 'Our whole community',
    description: 'Approved community members can see this',
  },
]

type UrgencyOption = {
  value: UrgencyLevel
  label: string
}

const URGENCY_OPTIONS: UrgencyOption[] = [
  { value: 'low', label: 'When you have a moment' },
  { value: 'medium', label: 'Within a few days' },
  { value: 'high', label: 'Soon — today if possible' },
]

export default function RequestForm() {
  const router = useRouter()

  const [requestType, setRequestType] = useState<RequestType | null>(null)
  const [description, setDescription] = useState('')
  const [visibility, setVisibility] = useState<VisibilityLevel>('leaders')
  const [urgency, setUrgency] = useState<UrgencyLevel>('medium')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const isEscalation = requestType === 'escalation'

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!requestType) {
      setError("Please select the type of support you're looking for.")
      return
    }
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/mvp/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          request_type: requestType,
          title: REQUEST_TYPES.find((t) => t.value === requestType)?.label ?? requestType,
          description: description.trim() || undefined,
          urgency_level: isEscalation ? 'urgent' : urgency,
          visibility_level: visibility,
        }),
      })

      const json = await res.json()

      if (!json.success) {
        setError(json.error?.message ?? 'Something went wrong. Please try again.')
        return
      }

      router.push(`/request/${json.data.request.id}`)
    } catch {
      setError('Unable to submit. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* Error banner */}
      {error && (
        <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Request type selection */}
      <fieldset className="space-y-3">
        <legend className="text-base font-medium text-stone-800">
          What kind of support are you looking for?
        </legend>
        <div className="space-y-2.5">
          {REQUEST_TYPES.map((type) => {
            const selected = requestType === type.value
            return (
              <label
                key={type.value}
                className={[
                  'flex cursor-pointer items-start gap-4 rounded-2xl border-2 p-4 transition-colors',
                  selected
                    ? 'border-dorea-700 bg-dorea-50'
                    : 'border-stone-200 bg-white hover:border-stone-300',
                ].join(' ')}
              >
                <input
                  type="radio"
                  name="requestType"
                  value={type.value}
                  checked={selected}
                  onChange={() => setRequestType(type.value)}
                  className="sr-only"
                />
                <span className="mt-0.5 text-2xl leading-none">{type.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className={['text-sm font-semibold', selected ? 'text-dorea-800' : 'text-stone-800'].join(' ')}>
                    {type.label}
                  </p>
                  <p className="mt-0.5 text-sm text-stone-500">{type.description}</p>
                </div>
                {selected && (
                  <span className="mt-0.5 flex-shrink-0 text-dorea-700">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </label>
            )
          })}
        </div>
      </fieldset>

      {/* Optional message */}
      <div className="space-y-2">
        <label htmlFor="description" className="block text-base font-medium text-stone-800">
          Share what&apos;s on your heart{' '}
          <span className="font-normal text-stone-400">(optional)</span>
        </label>
        <textarea
          id="description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field resize-none"
          placeholder="You don't have to share everything — just what feels right…"
        />
        <p className="text-xs text-stone-400">
          This is confidential and handled with care.
        </p>
      </div>

      {/* Urgency — only for non-escalation */}
      {requestType && !isEscalation && (
        <fieldset className="space-y-3">
          <legend className="text-base font-medium text-stone-800">
            How soon do you need a response?
          </legend>
          <div className="space-y-2">
            {URGENCY_OPTIONS.map((opt) => {
              const selected = urgency === opt.value
              return (
                <label
                  key={opt.value}
                  className={[
                    'flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors',
                    selected
                      ? 'border-dorea-700 bg-dorea-50 text-dorea-800'
                      : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300',
                  ].join(' ')}
                >
                  <input
                    type="radio"
                    name="urgency"
                    value={opt.value}
                    checked={selected}
                    onChange={() => setUrgency(opt.value)}
                    className="sr-only"
                  />
                  <span
                    className={[
                      'h-4 w-4 rounded-full border-2 flex-shrink-0',
                      selected ? 'border-dorea-700 bg-dorea-700' : 'border-stone-300',
                    ].join(' ')}
                  />
                  <span className="text-sm">{opt.label}</span>
                </label>
              )
            })}
          </div>
        </fieldset>
      )}

      {/* Visibility */}
      <fieldset className="space-y-3">
        <legend className="text-base font-medium text-stone-800">
          Who should see your request?
        </legend>
        <div className="space-y-2">
          {VISIBILITY_OPTIONS.map((opt) => {
            const selected = visibility === opt.value
            return (
              <label
                key={opt.value}
                className={[
                  'flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors',
                  selected
                    ? 'border-dorea-700 bg-dorea-50 text-dorea-800'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300',
                ].join(' ')}
              >
                <input
                  type="radio"
                  name="visibility"
                  value={opt.value}
                  checked={selected}
                  onChange={() => setVisibility(opt.value)}
                  className="sr-only"
                />
                <span
                  className={[
                    'h-4 w-4 rounded-full border-2 flex-shrink-0',
                    selected ? 'border-dorea-700 bg-dorea-700' : 'border-stone-300',
                  ].join(' ')}
                />
                <div>
                  <p className="text-sm font-medium">{opt.label}</p>
                  <p className="text-xs text-stone-400">{opt.description}</p>
                </div>
              </label>
            )
          })}
        </div>
      </fieldset>

      {/* Emergency note for escalation */}
      {isEscalation && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <strong className="font-semibold">If you are in immediate danger</strong>
          {' '}please call <strong>911</strong> or your local emergency services first.
          Dorea will also notify community leaders right away.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !requestType}
        className="btn-primary"
      >
        {loading ? 'Sharing…' : 'Share with us'}
      </button>

    </form>
  )
}
