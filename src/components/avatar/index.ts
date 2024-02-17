import Handlebars from 'handlebars'
import tmpl from './avatar.hbs?raw'
import './avatar.scss'

export default (src: SVGElement | string, width: string, height: string) => {
  return Handlebars.compile(tmpl)({ src, width, height })
}
