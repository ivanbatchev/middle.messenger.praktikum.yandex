import { render } from "../utils";
import { chats, notFound, profile, signIn, signUp } from "../pages";
import { button, input, link, avatar } from "../components";
import {
  attachmentImg as attachment,
  userImg as avatarImg,
  logoImg as logo,
  userImg,
} from "../../static/images";

const signInPage = signIn({
  loginInput: input("text", "login", "Логин", "Логин"),
  passwordInput: input("password", "password", "Пароль", "Пароль"),
  logoSrc: logo,
  button: button("submit", "Авторизоваться"),
  link: link("/sign-up", "Еще не зарегистрированы?"),
});

const notFoundPage = notFound({
  link: link("/chats", "Назад к чатам"),
  logo,
});

const signUpPage = signUp({
  logo,
  email: input("text", "email", "Почта", "Почта"),
  login: input("text", "login", "Логин", "Логин"),
  firstName: input("text", "first_name", "Имя", "Имя"),
  secondName: input("text", "second_name", "Фамилия", "Фамилия"),
  phone: input("tel", "phone", "Телефон", "Номер телефона"),
  password: input("password", "password", "Пароль", "Пароль"),
  checkPassword: input(
    "password",
    "check_password",
    "Повторите пароль",
    "Пароль еще раз"
  ),
  button: button("submit", "Зарегистрироваться"),
  link: link("/sign-in", "Уже есть аккаунт?"),
});

const profilePage = profile({
  avatar: avatar(userImg, "130", "130"),
  button: button("submit", "Coхранить"),
});

const chatsPage = chats({
  logo,
  searchBar: input("text", "search", "", "Поиск", "search-bar"),
  avatar: avatar(`${avatarImg}`, "47", "47"),
  attachmentLogoSrc: attachment,
  sendMessageButton: button("submit", "", "send-message"),
});

export const routes = [
  { path: "/", view: () => render(`Нажмите, чтобы увидеть страницу`) },
  { path: "/sign-in", view: () => render(signInPage) },
  { path: "/sign-up", view: () => render(signUpPage) },
  { path: "/profile", view: () => render(profilePage) },
  { path: "/chats", view: () => render(chatsPage) },
  {
    path: "/not-found",
    view: () => render(notFoundPage),
  },
];
