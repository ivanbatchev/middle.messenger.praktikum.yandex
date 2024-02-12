import { render } from '../utils';
import { chats, error, profile, signIn, signUp } from '../pages';
import { button, input, link, avatar } from '../components';
import {
	attachmentImg as attachment,
	userImg as avatarImg,
	logoImg as logo,
	userImg,
} from '../../static/images';

const signInPage = signIn({
	loginInput: input('text', 'login', 'Логин', 'Логин'),
	passwordInput: input('password', 'password', 'Пароль', 'Пароль'),
	logoSrc: logo,
	button: button('submit', 'Авторизоваться'),
	link: link('/sign-up', 'Еще не зарегистрированы?'),
});

const signUpPage = signUp({
	logo,
	email: input('text', 'email', 'Почта', 'Почта'),
	login: input('text', 'login', 'Логин', 'Логин'),
	firstName: input('text', 'first_name', 'Имя', 'Имя'),
	secondName: input('text', 'second_name', 'Фамилия', 'Фамилия'),
	phone: input('tel', 'phone', 'Телефон', 'Номер телефона'),
	password: input('password', 'password', 'Пароль', 'Пароль'),
	checkPassword: input(
		'password',
		'check_password',
		'Повторите пароль',
		'Пароль еще раз'
	),
	button: button('submit', 'Зарегистрироваться'),
	link: link('/sign-in', 'Уже есть аккаунт?'),
});

const profileOptions = {
	avatar: avatar(userImg, '130', '130'),
	firstName: 'Иван',
	infoMode: true,
	inputs: [
		{
			name: 'email',
			type: 'text',
			label: 'Почта',
			placeholder: 'ivanov.ivan@yandex.ru',
		},
		{
			name: 'login',
			type: 'text',
			label: 'Логин',
			placeholder: 'ivanov',
		},
		{
			name: 'first_name',
			type: 'text',
			label: 'Имя',
			placeholder: 'Иван',
		},
		{
			name: 'second_name',
			type: 'text',
			label: 'Фамилия',
			placeholder: 'Иванов',
		},
		{
			name: 'display_name',
			type: 'text',
			label: 'Имя в чате',
			placeholder: 'Иван И.',
		},
		{
			name: 'display_name',
			type: 'tel',
			label: 'Телефон',
			placeholder: '+7 (999) 789 12 12',
		},
	],
	links: [
		link('/profile/edit', 'Изменить данные'),
		link('/profile/change-password', 'Изменить пароль'),
		link('/sign-in', 'Выйти'),
	],
	button: button('submit', 'Cохранить'),
};

const profilePage = profile(profileOptions);

const profileEditPage = profile({
	...profileOptions,
	infoMode: false,
});

const profileChangePassword = profile({
	...profileOptions,
	infoMode: false,
	inputs: [
		{
			name: 'oldPassword',
			type: 'password',
			label: 'Старый пароль',
			placeholder: '',
		},
		{
			name: 'newPassword',
			type: 'password',
			label: 'Новый пароль',
			placeholder: '',
		},
		{
			name: 'sameNewPassword',
			type: 'password',
			label: 'Повторите новый пароль',
			placeholder: '',
		},
	],
});

const chatsPage = chats({
	logo,
	searchBar: input('text', 'search', '', 'Поиск', 'search-bar'),
	avatar: avatar(`${avatarImg}`, '47', '47'),
	attachmentLogoSrc: attachment,
	sendMessageButton: button('submit', '', 'send-message'),
});

const errorPageOptions = {
	link: link('/chats', 'Назад к чатам'),
	logo,
};

const errorPageClient = error({
	...errorPageOptions,
	errorNumber: '404',
	errorText: 'Не туда попали',
});

const errorPageServer = error({
	...errorPageOptions,
	errorNumber: '500',
	errorText: 'Мы уже фиксим',
});

export const routes = [
	{ path: '/', view: () => render(`Нажмите, чтобы увидеть страницу`) },
	{ path: '/sign-in', view: () => render(signInPage) },
	{ path: '/sign-up', view: () => render(signUpPage) },
	{ path: '/profile', view: () => render(profilePage) },
	{ path: '/profile/edit', view: () => render(profileEditPage) },
	{
		path: '/profile/change-password',
		view: () => render(profileChangePassword),
	},
	{ path: '/chats', view: () => render(chatsPage) },
	{
		path: '/not-found',
		view: () => render(errorPageClient),
	},
	{
		path: '/server-error',
		view: () => render(errorPageServer),
	},
];
