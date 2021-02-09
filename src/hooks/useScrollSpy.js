import { useState, useEffect } from 'react'

const useScrollSpy = () => {
  const isSSR = typeof window === 'undefined'
  const [hasScrolled, setHasScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(!isSSR ? window.scrollY : 0)

  const scrollSpyListener = event => {
    const currentPosition = window.scrollY
    setScrollY(currentPosition)
    setHasScrolled(currentPosition !== 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollSpyListener, { passive: true })
    return () => {
      window.removeEventListener('scroll', scrollSpyListener)
    }
  })

  return {
    scrollY,
    hasScrolled,
  }
}

export default useScrollSpy
