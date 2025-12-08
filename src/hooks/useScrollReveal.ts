import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

export function useScrollReveal() {
  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal('.sr-section', {
      distance: '40px',
      origin: 'bottom',
      duration: 800,
      delay: 100,
      easing: 'ease-out',
      interval: 100,
      cleanup: true,
    })
  }, [])
}
