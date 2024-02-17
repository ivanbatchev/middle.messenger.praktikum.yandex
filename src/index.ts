import './styles/index.scss'
import { router, navigate } from '@/utils'

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e: Event) => {
    const { href } = e.target as unknown as Location
    if (e.target instanceof Element && e.target.matches('[data-link]')) {
      e.preventDefault()
      navigate(href)
    }
  })

  router()
})
