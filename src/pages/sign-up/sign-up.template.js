import './sign-up';
import logo from '../../../static/images/logo.svg';
import './sign-up.scss';

export default `<main class='page'>
	<form class='sign-up-form'>
		<h1 class='sign-up-form__header'>Регистрация
      <img src=${logo} alt="логотип" class="logo"/>
    </h1>
		{{> input type="text" name="email" label="Почта" placeholder="Почта"}}
    {{> input type="text" name="login" label="Логин" placeholder="Логин"}}
    {{> input type="text" name="first_name" label="Имя" placeholder="Имя"}}
    {{> input type="text" name="second_name" label="Фамилия" placeholder="Фамилия"}}
    {{> input type="tel" name="phone" label="Телефон" placeholder="Телефон"}}
		{{> input type="password" name="password" label="Пароль" placeholder="Пароль"}}
    {{> input type="password" name="repeat_password" label="Пароль (еще раз)" placeholder="Пароль (еще раз)"}}
		
		{{> button text="Зарегистрироваться" type="submit"}}
		{{> link text="Уже зарегистрированы?" href="/sign-in"}}
	</form>
</main>`;
