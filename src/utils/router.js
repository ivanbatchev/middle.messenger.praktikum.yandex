import { routes } from '../routes';

export const navigate = (url) => {
	history.pushState({}, null, url);
	router();
};

export const router = () => {
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
