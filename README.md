# Проектная работа Веб-ларек

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

ItemsCollection: {
    total: number,
    items: object,

    add_items_to_collection? (): function,
    add_item_to_collection? (): function,
    delete_item_from_collection? (): function,

}

Item  { 
    id: string,
    description: string,
    image: string,
    title: string,
    category: string,
    price: number || null,

    show_card (): function,
    add_to_order (): function,
    delete_from_order (): function,
}

Order: {
    id: string,
    total: number,
    items: array,
    payment: string,
    address: string,
    email: string,
    phone: string,

    show_order (): function,
    place_an_order (): function,
    delete_item (): function,

}

