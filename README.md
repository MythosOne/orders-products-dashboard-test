# Orders Products Dashboard Test

## Описание проекта

Данное приложение представляет собой дашборд для управления заказами и продуктами.
Реализовано с разделением на фронтенд и бэкенд части.

- **Фронтенд** — React с TypeScript и Redux Toolkit для централизованного управления состоянием.
- **Бэкенд** — Node.js с Express и Socket.io для REST API и работы с WebSocket в реальном времени.

## Основные возможности

- Страницы Orders и Products с отдельным роутингом на фронтенде
- Навигационное меню с переходами по страницам
- Верхнее меню с отображением текущей даты и времени в реальном времени
- Счётчик активных сессий пользователей с использованием Socket.io
- Список заказов с возможностью раскрытия деталей и удаления через модальное окно с подтверждением
- Список продуктов с фильтрацией по типу и отображением ключевых характеристик

## Технический стек и зависимости

- React 18 с функциональными компонентами и хуками
- TypeScript с включённым строгим режимом
- Redux Toolkit для управления состоянием
- React Router для маршрутизации
- Socket.io Client для реального времени на фронтенде
- Node.js, Express и Socket.io на бэкенде
- Vite — сборщик и dev-сервер фронтенда
- CSS Modules / styled-components (уточнить)
- ESLint и Prettier для контроля качества кода

## Новая структура проекта
```text
orders-products-dashboard-test/
├── backend/        # Серверная часть (Node.js, Express, Socket.io)
├── frontend/       # Клиентская часть (React, Redux, Vite)
├── README.md       # Общий README с инструкциями по обеим частям
└── ...
```

## Запуск фронтенда:

```bash
cd frontend
npm install
npm run dev
```
## Запуск бэкенда:

```bash
cd ../backend
npm install
npm run dev
```
Файл схемы BD backend/OrdersDB/

## Запуск фронтенда через Docker

# Скачиваем образ с Docker Hub
docker pull mythosone/orders-products-dashboard-test:latest

# Запускаем контейнер с пробросом порта
docker run -p 5173:5173 mythosone/orders-products-dashboard-test:latest