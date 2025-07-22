# Проектная работа Веб-ларек

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с TS компонентами
- src/components/base/ — папка с базовым кодом ?

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

## Данные и типы данных

Товар

```
export interface IItem  { 
    _id: string,
    description: string,
    image: string,
    title: string,
    category: string,
    price: number | null,

    show_card (): void,
    add_to_order (): void,
    delete_from_order (): void,
}
```

Заказ

```
export interface IOrder {
    _id: string,
    total: number,
    items: IItem[],
    payment: string,
    address: string,
    email: string,
    phone: string,

    show_order (): void,
    place_an_order (): void,
    delete_item (): void,
}
```

Коллекция товаров

```
export interface IItemsCollection {
    total: number,
    items: IItem[],
    preview: string | null,

    add_items_to_collection? (): void,
    add_item_to_collection? (): void,
    delete_item_from_collection? (): void,
}
```

Данные товара в списке на главной странице

```
export type TItemPreview = Pick<IItem, 'image' | 'title' | 'category' | 'price'>;
```

Данные товара в модальном окне товара

```
export type TItemModal = Pick<IItem, 'description' |'image' | 'title' | 'category' | 'price'>;
```

Данные для списка товаров в корзине

```
export type TBasketModal = Pick<IItem, 'title' | 'price'>;
```

Данные формы первого этапа оформления заказа

```
export type TPaymentAndAddressModal = Pick<IOrder, 'payment' | 'address'>;
```

Данные формы второго этапа оформления заказа

```
export type TEmailAndPhoneModal = Pick<IOrder, 'email' | 'phone'>;
```
