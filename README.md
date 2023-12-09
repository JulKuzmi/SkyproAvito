# Проект, сайт аналог Авито

## Примечания по запуску и командам проектра

Запуск проекта:

### `npm start`

## Важная информация

Проект развернут в docker по адресу [http://localhost:3000], бэкэнд расположен по адресу: [http://localhost:8090], для бэкэнда используется Swagger UI API, с которым проект непосредственно связан.

## Язык проекта

<div id="socials" aligh="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="js" width="40" height="40"/>&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" title="html" width="40" height="40"/>&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" title="css" width="40" height="40"/>&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="react" width="40" height="40"/>&nbsp;
</div>

## Стэк библиотек проекта

React
React Scripts
React Router Dom
React Redux
Styled Components

## Структура проекта

1. Страница Авторизации и регистрации:

- на данной странице пользователь имеет возможность зарегистрироваться или войти в свой аккаунт

2. Главная страница:

- список объявлений
- кнопка "Вход в личный кабинет"
- окно поиска по объявлениям

3. Страница объявления:

- описание товара, цена, информация о продавце
- кнопка "Показать телефон", при клике на которую пользователь может увидеть телефон продавца
- кнопка "Вернуться на главную" ведет на главную страницу

4. Страница "Личный кабинет": (доступна только для авторизованного пользователя)

- кнопки для смены пароля
- кнопка сохранить изменение о пользователе
- список объявлений пользователя, ведет на страницу объявления

5. Страница "Профиль продавца":

- кнопка "Вернуться на главную" ведет на главную страницу
- информация о пользователе
- список объявлений пользователя, ведет на страницу объявления
