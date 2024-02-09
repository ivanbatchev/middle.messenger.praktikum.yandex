import Handlebars from 'handlebars';

export const render = (template, args = {}) => {
	const contentWrapper = document.getElementById('content');
	const compiledTemplate = Handlebars.compile(template);
	const result = compiledTemplate(args);
	contentWrapper.innerHTML = result;
};
