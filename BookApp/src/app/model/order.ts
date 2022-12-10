export interface IOrder {
    id?: number | null;
    description: string;
    value: number;
    type: OrderType;
}
export enum OrderType{
    Ecommerce='Ecommerce',
    Store='Store',
    App='App'

}