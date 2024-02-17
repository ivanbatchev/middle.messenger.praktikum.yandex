import Handlebars from 'handlebars'
import tmpl from './profile.hbs?raw'
import './profile.scss'

export default (props = {}) => {
  return Handlebars.compile(tmpl)(props)
}
