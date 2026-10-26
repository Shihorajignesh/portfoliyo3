import { useEffect, useState } from 'react'

// useMediaQuery('(min-width: 768px)') → true/false. 3D ફક્ત desktop પર ચલાવવા વપરાય છે.
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = () => setMatches(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [query])
  return matches
}