# Hanna Ilyinchyk — Frontend Developer

Одностраничный сайт-портфолио. Адаптивная верстка, светлая и темная темы,
закрепленная шапка, контакты и скачивание резюме.

## Локальный запуск

Из папки проекта:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Откройте <http://127.0.0.1:4173/>. Оставьте сервер работающим во время просмотра.

## Публикация на GitHub Pages

1. Создайте пустой репозиторий на GitHub. Для GitHub Free используйте публичный репозиторий.
2. Подключите репозиторий как `origin` и отправьте ветку `main`.
3. В репозитории откройте **Settings → Pages → Build and deployment**.
4. В поле **Source** выберите **GitHub Actions**.
5. Откройте **Actions → Deploy website to GitHub Pages**. При необходимости
   нажмите **Run workflow** для ветки `main`.
6. После успешного выполнения ссылка будет в **Settings → Pages** и в результате запуска.

Workflow публикует только содержимое `dist/`. После следующих отправок в `main`
сайт обновляется автоматически. Сборка и установка зависимостей не требуются.
Относительные ссылки на CSS, JavaScript, фото и PDF работают и в подпапке репозитория.

Файлы сайта находятся в `dist/`; настройки публикации — в `.github/workflows/`.
Скриншоты, ZIP-архивы и локальные настройки Sites исключены из Git через `.gitignore`.

GitHub Pages публикует сайт в интернете, включая фото, контакты и PDF,
размещенные в `dist/assets/`.

Документация: <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>.
