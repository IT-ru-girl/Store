export interface ICartItem extends IProduct {
    quantity: number;
}
export interface IProduct {
    id: string,
    image: string,
    name: string,
    price: number,
    quantity: number
}
export interface IProductItem {
    product: IProduct
}
