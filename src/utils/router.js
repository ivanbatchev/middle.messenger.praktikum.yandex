import { signIn, notFound, signUp, chats } from '../pages';
import { render } from './render';

export const navigate = (url) => {
	history.pushState({}, null, url);
	router();
};

export const router = () => {
	const routes = [
		{ path: '/', view: () => render(`Нажмите, чтобы увидеть страницу`) },
		{ path: '/sign-in', view: () => render(signIn) },
		{ path: '/sign-up', view: () => render(signUp) },
		{ path: '/not-found', view: () => render(notFound) },
		{ path: '/chats', view: () => render(chats) },
	];

	const matches = routes.map((route) => {
		return {
			route,
			hasMatched: location.pathname === route.path,
		};
	});

	let match = matches.find((item) => item.hasMatched);

	if (!match) {
		match = {
			route: routes[0],
			hasMatched: true,
		};
	}

	match.route.view();
};
