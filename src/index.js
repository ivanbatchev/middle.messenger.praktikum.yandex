import Handlebars from 'handlebars';
import { input, button, link, avatar } from './components';
import { router, navigate } from './utils';
import './styles/index.scss';

Handlebars.registerPartial('input', input);
Handlebars.registerPartial('button', button);
Handlebars.registerPartial('link', link);
Handlebars.registerPartial('avatar', avatar);

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
	document.body.addEventListener('click', (e) => {
		if (e.target.matches('[data-link]')) {
			e.preventDefault();
			navigate(e.target.href);
		}
	});

	router();
});
