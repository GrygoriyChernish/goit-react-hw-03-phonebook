# Heading 1 (react-template Developing Prerequisites)

На компьютере должен быть установлен

Node.js.

Setting up Dev Один раз на проект установить все зависимости.

npm install И запустить режим разработки.

npm start Во вкладке браузера перейти по адресу (<http://localhost:3000>).

Building Для того чтобы создать оптимизированные файлы для хостинга, необходимо
выполнить следующую команду. В корне проекта появится папка build со всеми
оптимизированными ресурсами.

npm run predeploy Deploying / Publishing Сборка может автоматически деплоить
билд на GitHub Pages удаленного (remote) репозитория. Для этого необходимо в
файле package.json отредактировать поле homepage, заменив имя пользователя и
репозитория на свои.

"homepage": "https://имя*пользователя.github.io/имя*репозитория" После чего в
терминале выполнить следующую команду.

npm run deploy Если нет ошибок в коде и свойство homepage указано верно,
запустится сборка проекта в продакшен, после чего содержимое папки build будет
помещено в ветку gh-pages на удаленном (remote) репозитории. Через какое-то
время живую страницу можно будет посмотреть по адресу указанному в
отредактированном свойстве homepage.
