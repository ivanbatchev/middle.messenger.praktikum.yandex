import Handlebars from 'handlebars';
import tmpl from './error.hbs?raw';
import './error.scss';

export default (props = {}) => {
	return Handlebars.compile(tmpl)(props);
};
