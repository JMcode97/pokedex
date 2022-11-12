import { RequestHandler } from "express";
import Product from '../models/product';

export const createProduct:RequestHandler = async (req, res) => {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    console.log(savedProduct);
    res.json(savedProduct);
};

export const getProducts:RequestHandler = (req, res) => {
    res.json('getting products')
};

export const getProduct:RequestHandler = (req, res) => {
    res.json('getting a product by id')
};

export const deleteProduct:RequestHandler = (req, res) => {
    res.json('deleting a product by id')
};

export const updateProduct:RequestHandler = (req, res) => {
    res.json('updating a product by id')
};