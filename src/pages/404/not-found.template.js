import logo from '../../../static/images/logo.svg';
import './not-found.scss';

export default `<main class="page not-found-page">
	<h1 class='not-found-page__header'>
		<img src=${logo} alt="логотип" class="logo"/>
		404
		<p class="not-found-page__subheader">Не туда попали</p>
	</h1>
	{{> link text="Назад к чатам" href="/chats"}}
</main>`;
