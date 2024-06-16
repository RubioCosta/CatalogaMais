import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

async function createdProduct( dataProduct ) {
    try {
      await axios.post(`${API_URL}/product`, dataProduct );

      return;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        throw err.response.data.message;
      } else {
        throw 'Tente novamente mais tarde.';
      }
    }
}

async function getAllProduct() {
  try {
    const response = await axios.get(`${API_URL}/product/`);

    const products = response.data.data.map(product => {
      return {
        label: product.name,
        value: product.id
      }
    });

    return products;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw err.response.data.message;
    } else {
      throw 'Tente novamente mais tarde.';
    }
  }
}

const ProductService = {
  createdProduct,
  getAllProduct
};

export default ProductService;