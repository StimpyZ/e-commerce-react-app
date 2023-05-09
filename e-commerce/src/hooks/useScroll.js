import { useEffect, useState } from 'react'

export function useScroll () {
  const [navHeight, setNavHeight] = useState(80)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && navHeight !== 120) {
        setNavHeight(120)
      } else if (window.scrollY !== 0 && navHeight !== 80) {
        setNavHeight(80)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [navHeight])
  return { navHeight }
}
