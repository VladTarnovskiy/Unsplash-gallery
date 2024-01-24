# Приложение по поиску фото при помощи Unspalsh api.

- Deploy: https://unsplash-gallery-vladtarnovskiy.vercel.app/

## Структура:

1. ### Главная страница

   - реализован поиск
   - сортировка
   - фильтрация
   - пагинация
   - при клике по тегу можно найти подобные ему
   - при клике по фото можно открыть его на весь экран и скачать

2. ### Страницы входа/регистрации
   - данные юзера хранятся на JSON сервере (Deploy: https://github.com/VladTarnovskiy/unsplash-json-server)
   - при при правильном вводе данных происходит редирект на основную страницу

## Stack:

- TypeScript
- next.js
- next-auth
- axios
- zustand
- tailwind
- material-tailwind
- json-server
- bcrypt
