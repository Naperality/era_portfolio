'use client'
export const dynamic = 'force-dynamic'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'

function StudioLoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectPath = searchParams.get('redirect') || '/studio'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/studio-auth', {
      method: 'POST',
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push(redirectPath)
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow space-y-4 w-full max-w-xs">
        <h1 className="text-xl font-bold">Studio Login</h1>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-sm"
        />
        <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 py-2 rounded font-semibold">
          Enter Studio
        </button>
      </form>
    </div>
  )
}

export default function StudioLoginPage() {
  return (
    <Suspense fallback={<div className="text-center text-white mt-10">Loading login...</div>}>
      <StudioLoginForm />
    </Suspense>
  )
}
