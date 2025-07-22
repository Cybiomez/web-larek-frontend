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

export interface IItemsCollection {
    total: number,
    items: IItem[],
    preview: string | null,

    add_items_to_collection? (): void,
    add_item_to_collection? (): void,
    delete_item_from_collection? (): void,
}

export type TItemPreview = Pick<IItem, 'image' | 'title' | 'category' | 'price'>;
export type TItemModal = Pick<IItem, 'description' |'image' | 'title' | 'category' | 'price'>;
export type TBasketModal = Pick<IItem, 'title' | 'price'>;
export type TPaymentAndAddressModal = Pick<IOrder, 'payment' | 'address'>;
export type TEmailAndPhoneModal = Pick<IOrder, 'email' | 'phone'>;