import Handlebars from 'handlebars'
import tmpl from './sign-up.hbs?raw'
import './sign-up.scss'

export default (props = {}) => {
  return Handlebars.compile(tmpl)(props)
}
