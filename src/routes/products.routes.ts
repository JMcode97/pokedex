import { Router } from "express";
import * as productController from "../controllers/products.controller";

const router = Router();

router.get('/products', productController.getProducts);
router.post('/products', productController.createProduct);
router.get('/products/:id', productController.getProduct);
router.delete('/products/:id', productController.deleteProduct);
router.put('/products/:id', productController.updateProduct);

export default router