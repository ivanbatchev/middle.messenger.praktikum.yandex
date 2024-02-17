import Handlebars from 'handlebars'
import tmpl from './sign-in.hbs?raw'
import './sign-in.scss'

export default (props = {}) => {
  return Handlebars.compile(tmpl)(props)
}
