import Handlebars from 'handlebars';
import tmpl from './not-found.hbs?raw';
import './not-found.scss';

export default (props = {}) => {
	return Handlebars.compile(tmpl)(props);
};
