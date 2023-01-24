type DateTime = string;

export interface Pokemon {
    id: string,
    name: string,
    height: string,
    weight: string,
    img: string,
}

export interface Products {
    _id?: number,
    title: string,
    price: number,
    createdAt?: DateTime,
    updatedAt?: DateTime,
}

export interface ProductsCard {
    id?: number,
    title: string,
    price: number,
    img: string,
    load?: any,
}

export type Params = {
    id: string,
}