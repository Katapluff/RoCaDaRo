import Product from "../model/productModel.js";
import data from "../../frontend/src/data.js";

// Función para inicializar los datos desde data.js
const initializeData = async () => {
    try {
      await Product.deleteMany(); // Eliminar todos los productos existentes
      await Product.insertMany(data.products); // Insertar los productos desde data.js
      console.log('Datos iniciales importados correctamente');
    } catch (error) {
      console.error('Error al importar datos iniciales:', error);
    }
  };
  
// Obtener todos los productos
const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
  };

// Obtener un producto por su ID
const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product gefunden' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Create product
const createProduct = async (req, res) => {
  const { name, description, price, image, category } = req.body;

  try {
    const newProduct = new Product({ name, description, price, image, category });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// update product
async function updateProduct(req, res) {
  const productId = req.params.id;
  const { name, description, price, image, category } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      productId,
      { name, description, price, image, category },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
}

// Eliminar un producto
const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};

export {
  initializeData,
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
