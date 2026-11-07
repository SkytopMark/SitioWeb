import { onMounted, onBeforeUnmount } from 'vue'

// Fades [data-animate] elements in each time they scroll into view, and resets them when they leave.
export function useScrollAnimation(threshold = 0.1) {
  let observer: IntersectionObserver | null = null
  let timer: ReturnType<typeof setTimeout>

  onMounted(() => {
    // Wait for initial paint to complete
    timer = setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement
          const animationClass = `animate-${element.getAttribute('data-animate') || 'fade-in-up'}`
          const isAnimated = element.classList.contains(animationClass)

          if (entry.isIntersecting && entry.intersectionRatio > threshold && !isAnimated) {
            element.classList.add(animationClass)
            element.classList.remove('opacity-0')
          } else if (!entry.isIntersecting && isAnimated) {
            element.classList.remove(animationClass)
            element.classList.add('opacity-0')
          }
        })
      }, { threshold })

      document.querySelectorAll('[data-animate]').forEach((el) => observer?.observe(el))
    }, 350)
  })

  onBeforeUnmount(() => {
    clearTimeout(timer)
    observer?.disconnect()
  })
}
