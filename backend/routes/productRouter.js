import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

const productRouter = express.Router();

// Ruta para obtener todos los productos
productRouter.get('/', getAllProducts);

// Ruta para obtener un producto por su ID
productRouter.get('/:id', getProductById);

// Ruta para crear un nuevo producto
productRouter.post('/', createProduct);

// Ruta para actualizar un producto
productRouter.put('/:id', updateProduct);

// Ruta para eliminar un producto
productRouter.delete('/:id', deleteProduct);

export default productRouter;
