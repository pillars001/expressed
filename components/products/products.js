import express from 'express'
import {getProducts, getProduct} from "./productsController";

const router = express.Router();

// Get all products
router.get('/products', getProducts);
router.get('/product/:productId', getProduct);

export default router;