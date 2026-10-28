import { onMounted, ref } from 'vue'

export function useScrollAnimation(threshold = 0.1) {
  const elementsToAnimate = ref<HTMLElement[]>([])
  let lastScrollY = 0

  onMounted(() => {
    // Wait for initial paint to complete
    setTimeout(() => {
      // Find all elements with data-animate attribute
      const elements = document.querySelectorAll('[data-animate]')
      elementsToAnimate.value = Array.from(elements)

      // Track scroll direction
      const detectScrollDirection = () => {
        const currentScrollY = window.scrollY
        return currentScrollY > lastScrollY ? 'down' : 'up'
      }

      const observer = new IntersectionObserver((entries) => {
        const scrollDirection = detectScrollDirection()

        entries.forEach((entry) => {
          const element = entry.target as HTMLElement
          const animationType = element.getAttribute('data-animate') || 'fade-in-up'

          // Animate when scrolling down and element enters view
          if (entry.isIntersecting && entry.intersectionRatio > threshold && scrollDirection === 'down') {
            // Reset animation by removing and re-adding class
            element.classList.remove(`animate-${animationType}`)
            void element.offsetWidth // Trigger reflow to restart animation
            element.classList.add(`animate-${animationType}`)
            element.classList.remove('opacity-0')
          }
          // Reset to invisible when scrolling up and leaving view
          else if (!entry.isIntersecting && scrollDirection === 'up') {
            element.classList.remove(`animate-${animationType}`)
            element.classList.add('opacity-0')
          }
        })
      }, { threshold })

      elementsToAnimate.value.forEach((el) => {
        observer.observe(el)
      })

      // Update last scroll position
      window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY
      }, { passive: true })
    }, 350) // Wait for page to fully load before observing
  })

  return { elementsToAnimate }
}

export function useStaggerAnimation(selector: string) {
  onMounted(() => {
    const elements = document.querySelectorAll(selector)

    elements.forEach((element, index) => {
      const el = element as HTMLElement
      el.style.opacity = '0'
      el.style.animation = `fadeInUp 0.6s ease-out ${index * 100 + 200}ms forwards`
    })
  })
}
