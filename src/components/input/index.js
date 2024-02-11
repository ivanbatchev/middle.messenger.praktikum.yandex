import Handlebars from 'handlebars';
import tmpl from './input.hbs?raw';
import './input.scss';

export default (type, name, label, placeholder, className = '') => {
	return Handlebars.compile(tmpl)({
		type,
		name,
		label,
		placeholder,
		class: className,
	});
};
