import Handlebars from 'handlebars'
import tmpl from './button.hbs?raw'
import './button.scss'

export default (type: string, text: string, className = '') => {
  return Handlebars.compile(tmpl)({ type, text, class: className })
}
