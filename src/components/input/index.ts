import Handlebars from 'handlebars'
import tmpl from './input.hbs?raw'
import './input.scss'

export default (
  type: string,
  name: string,
  label: string,
  placeholder: string,
  className?: string
) => {
  return Handlebars.compile(tmpl)({
    type,
    name,
    label,
    placeholder,
    class: className,
  })
}
