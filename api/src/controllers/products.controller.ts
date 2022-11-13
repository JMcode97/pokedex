import { RequestHandler } from "express";
import Product from '../models/product';

export const createProduct:RequestHandler = async (req, res) => {
    try {
    const productsFound = await Product.findOne({title: req.body.title});
    if(productsFound) {
        return res.status(301).json({message: 'The product already exists'});
    }

    const product = new Product(req.body);
    const savedProduct = await product.save();

    res.json(savedProduct);

    } catch (err) {
        res.json(err);
    }  
};

export const getProducts:RequestHandler = async (req, res) => {
    try {
    const products = await Product.find();
    return res.json(products);

    } catch (err) {
        res.json(err);
    }
};

export const getProduct:RequestHandler = async (req, res) => {
    try {
        const productFound = await Product.findById(req.params.id);
        if(!productFound) {
            return res.status(204).json();
        }

        return res.json(productFound);

    } catch (err) {
        res.json(err);
    }
};

export const deleteProduct:RequestHandler = async (req, res) => {
    try {
        const productFound = await Product.findByIdAndDelete(req.params.id);
        if(!productFound) {
            return res.status(204).json();
        }

        return res.json(productFound);

    } catch (err) {
        res.json(err);
    }
};

export const updateProduct:RequestHandler = async (req, res) => {
    try {
        const productUpdated = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!productUpdated) {
            return res.status(204).json();
        }

        return res.json(productUpdated);

    } catch (err) {
        res.json(err);
    }
};