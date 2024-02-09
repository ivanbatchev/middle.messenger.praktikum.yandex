import logo from '../../../static/images/logo.svg';
import './sign-in';
import './sign-in.scss';

export default `<main class='page'>
	<form class='sign-in-form'>
		<h1 class='sign-in-form__header'>Вход</h1>
		{{> input type="text" name="login" label="Логин" placeholder="Логин" }}
		{{> input type="password" name="password" label="Пароль" placeholder="Пароль" }}
		<img src=${logo} alt="логотип" class="logo"/>
		{{> button text="Авторизоваться" type="submit"}}
		{{> link text="Нет аккаунта?" href="/sign-up"}}
	</form>
</main>`;
