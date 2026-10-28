import { onMounted, ref } from 'vue'

export function useScrollAnimation(threshold = 0.1) {
  const elementsToAnimate = ref<HTMLElement[]>([])

  onMounted(() => {
    // Find all elements with data-animate attribute
    const elements = document.querySelectorAll('[data-animate]')
    elementsToAnimate.value = Array.from(elements)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          const animationType = element.getAttribute('data-animate') || 'fade-in-up'

          // Add animation class
          element.classList.add(`animate-${animationType}`)
          element.classList.remove('opacity-0')

          // Stop observing after animation triggers
          observer.unobserve(element)
        }
      })
    }, { threshold })

    elementsToAnimate.value.forEach((el) => {
      observer.observe(el)
    })
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
