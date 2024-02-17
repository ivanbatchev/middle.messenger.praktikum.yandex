import Handlebars from 'handlebars'
import tmpl from './chats.hbs?raw'
import './chats.scss'

export default (props = {}) => {
  return Handlebars.compile(tmpl)(props)
}
