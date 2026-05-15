'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    inviteCode: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/mvp/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json()

      if (!json.success) {
        setError(json.error?.message ?? 'Something went wrong. Please try again.')
        return
      }

      router.push('/request/new')
    } catch {
      setError('Unable to connect. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="h-1 w-full bg-dorea-700" />

      <div className="flex flex-1 flex-col justify-center px-4 py-12">
        <div className="mx-auto w-full max-w-sm space-y-8">

          {/* Header */}
          <div className="text-center space-y-1">
            <Link href="/" className="text-2xl font-semibold text-stone-900">
              Dorea
            </Link>
            <p className="text-stone-500">Join your community</p>
          </div>

          {/* Invite code note */}
          <div className="rounded-xl bg-dorea-50 px-4 py-3 text-sm text-dorea-800">
            You&apos;ll need the invite code your pastor or community leader shared with you.
          </div>

          {/* Form */}
          <div className="card space-y-5">
            {error && (
              <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="block text-sm font-medium text-stone-700">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={form.firstName}
                    onChange={(e) => update('firstName', e.target.value)}
                    className="input-field"
                    placeholder="Grace"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="block text-sm font-medium text-stone-700">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={form.lastName}
                    onChange={(e) => update('lastName', e.target.value)}
                    className="input-field"
                    placeholder="Kim"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="input-field"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-stone-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={form.password}
                  onChange={(e) => update('password', e.target.value)}
                  className="input-field"
                  placeholder="At least 8 characters"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="inviteCode" className="block text-sm font-medium text-stone-700">
                  Community invite code
                </label>
                <input
                  id="inviteCode"
                  type="text"
                  required
                  value={form.inviteCode}
                  onChange={(e) => update('inviteCode', e.target.value)}
                  className="input-field"
                  placeholder="From your pastor or leader"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
              >
                {loading ? 'Joining…' : 'Join community'}
              </button>
            </form>
          </div>

          {/* Login link */}
          <p className="text-center text-sm text-stone-500">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-dorea-700 underline-offset-2 hover:underline">
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </main>
  )
}
