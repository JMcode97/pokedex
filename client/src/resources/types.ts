type DateTime = string;

export interface Products {
    _id?: number,
    title: string,
    price: number,
    createdAt?: DateTime,
    updatedAt?: DateTime,
}

export interface ProductsCard {
    title: string,
    price: number,
    img: string,
}