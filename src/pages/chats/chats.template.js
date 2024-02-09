import './chats.scss';
import attachment from '../../../static/images/attachment.svg';
import logo from '../../../static/images/logo.svg';

export default `<main class='page chats'>
	<div class='chats__sidebar sidebar'>
    <header class="sidebar__header header">
      <div class="header__wrapper top">
        <img src=${logo} alt="логотип" class="logo" />
        <a href="/profile" data-link class="header__link">Профиль &gt;</a>
      </div>
      {{> input type="text" placeholder="Поиск" class="search-bar"}}
    </header>
      <ul class="chats__list">
        <li class="chats__item chat-item">
        {{> avatar width="47" height="47"}}
          <div class="chat-item__sender">
            <p class="chat-item__name">John Doe</p>
            <p class="chat-item__last-message">Изображение</p>
          </div>
          <div class="chat-item__info message-info">
            <p class="message-info__time">10:48</p>
            <div class="message-info__unread-count">2</div>
          </div>
        </li>
        <li class="chats__item chat-item">
        {{> avatar width="47" height="47"}}
          <div class="chat-item__sender">
            <p class="chat-item__name">James Smith</p>
            <p class="chat-item__last-message">Привет, как отдыхается?</p>
          </div>
          <div class="chat-item__info message-info">
            <p class="message-info__time">10:48</p>
            <div class="message-info__unread-count">2</div>
          </div>
        </li>
        <li class="chats__item chat__item_active chat-item">
        {{> avatar width="47" height="47"}}
          <div class="chat-item__sender">
            <p class="chat-item__name">Mike Torrison</p>
            <p class="chat-item__last-message">Спасибо!</p>
          </div>
          <div class="chat-item__info message-info">
            <p class="message-info__time">11:15</p>
            <div class="message-info__unread-count">4</div>
          </div>
        </li>
      </ul>
  </div>
  <section class='chats_chat-messages conversation'>
    <header class="conversation__header">
      <div class="conversation__user-info">
        {{> avatar width="34" height="34"}}
        <p class="conversation__user-name">Mike Torrison</p>
      </div>
      &#8942;
    </header>
    <main class="conversation__view">
      <p class="conversation__date">2 февраля</p>
      <div class="conversation__message-recieved message">
        Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
        <div class="conversation__message-recieved-time">11:20</div>
      </div>
      <div class="conversation__message-sent message">Круто!!
        <div class="conversation__message-sent-status">&#10004;</div>
      </div>
    </main>
    <footer class="conversation__message-type-bar">
      <img src=${attachment} alt="логотип" class="attachment" />
      <input type="text" name="message" class="message-input" placeholder="Сообщение" autocomplete="off"/>
      {{> button type="submit" class="send-message" }}
    </footer>
  </section>
</main>`;
