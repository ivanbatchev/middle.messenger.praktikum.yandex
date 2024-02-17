import Handlebars from 'handlebars'
import tmpl from './link.hbs?raw'
import './link.scss'

export default (href: string, text: string): string => {
  return Handlebars.compile(tmpl)({ href, text })
}
