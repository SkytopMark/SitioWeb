import { onMounted, onBeforeUnmount } from 'vue'

export function useScrollAnimation(threshold = 0.1) {
  let lastScrollY = 0
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    // Wait for initial paint to complete
    setTimeout(() => {
      // Find all elements with data-animate attribute
      const elements = document.querySelectorAll('[data-animate]')

      // Track scroll direction
      const detectScrollDirection = () => {
        const currentScrollY = window.scrollY
        return currentScrollY > lastScrollY ? 'down' : 'up'
      }

      observer = new IntersectionObserver((entries) => {
        // Update scroll position before checking direction
        lastScrollY = window.scrollY
        const scrollDirection = detectScrollDirection()

        entries.forEach((entry) => {
          const element = entry.target as HTMLElement
          const animationType = element.getAttribute('data-animate') || 'fade-in-up'

          // Check if element already has animation
          const isAnimated = element.classList.contains(`animate-${animationType}`)

          // Animate if in view and (hasn't animated yet OR scrolling down)
          if (entry.isIntersecting && entry.intersectionRatio > threshold) {
            if (!isAnimated || scrollDirection === 'down') {
              element.classList.remove(`animate-${animationType}`)
              void element.offsetWidth // Trigger reflow to restart animation
              element.classList.add(`animate-${animationType}`)
              element.classList.remove('opacity-0')
            }
          }
          // Reset to invisible when scrolling up and leaving view
          else if (!entry.isIntersecting && scrollDirection === 'up' && isAnimated) {
            element.classList.remove(`animate-${animationType}`)
            element.classList.add('opacity-0')
          }
        })
      }, { threshold })

      elements.forEach((el) => {
        observer?.observe(el)
      })

      // Update last scroll position on scroll event
      const handleScroll = () => {
        lastScrollY = window.scrollY
      }
      window.addEventListener('scroll', handleScroll, { passive: true })

      // Cleanup function - store for onBeforeUnmount
      ;(window as any)._scrollAnimationCleanup = () => {
        window.removeEventListener('scroll', handleScroll)
        if (observer) {
          observer.disconnect()
        }
      }
    }, 350) // Wait for page to fully load before observing
  })

  onBeforeUnmount(() => {
    // Clean up scroll listener and observer
    if ((window as any)._scrollAnimationCleanup) {
      ;(window as any)._scrollAnimationCleanup()
      delete (window as any)._scrollAnimationCleanup
    }
  })

  return {}
}

