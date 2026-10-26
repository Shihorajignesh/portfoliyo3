import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

// GITHUB_USERNAME ભરેલું હોય ત્યારે જ દેખાય છે. Real data: GitHub public API.
export default function GithubLiveStats({ username }) {
  const [state, setState] = useState({ status: 'idle', user: null, repos: [] })

  useEffect(() => {
    if (!username) return undefined
    const controller = new AbortController()
    const { signal } = controller
    const get = (url) =>
      fetch(url, { signal }).then((r) => {
        if (!r.ok) throw new Error('GitHub request failed')
        return r.json()
      })

    setState({ status: 'loading', user: null, repos: [] })
    Promise.all([
      get(`https://api.github.com/users/${username}`),
      get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`),
    ])
      .then(([user, repos]) => setState({ status: 'done', user, repos }))
      .catch((err) => {
        if (err.name !== 'AbortError') setState({ status: 'error', user: null, repos: [] })
      })

    return () => controller.abort()
  }, [username])

  if (!username) return null

  if (state.status === 'loading') {
    return <p className="mt-6 text-sm text-slate-400">Loading GitHub data…</p>
  }
  if (state.status === 'error') {
    return <p className="mt-6 text-sm text-slate-400">Could not load GitHub data right now. Please check the username.</p>
  }
  if (state.status !== 'done') return null

  const { user, repos } = state
  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 gap-3">
        {[
          ['Repositories', user.public_repos],
          ['Followers', user.followers],
          ['Following', user.following],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
            <p className="font-display text-xl font-bold text-white">{value}</p>
            <p className="text-xs text-slate-400">{label}</p>
          </div>
        ))}
      </div>
      <ul className="mt-4 space-y-2">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 px-4 py-3 text-sm transition-colors hover:border-brand-amber/40"
            >
              <span className="truncate font-medium text-white">{repo.name}</span>
              <span className="flex shrink-0 items-center gap-3 text-xs text-slate-400">
                {repo.language && <span>{repo.language}</span>}
                <span className="inline-flex items-center gap-1">
                  <Star size={12} aria-hidden="true" /> {repo.stargazers_count}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}