import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

async function createdSupplier( dataSupplier ) {
    try {
      const response = await axios.post(`${API_URL}/supplier`, dataSupplier );

      return response.data;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        throw err.response.data.message;
      } else {
        throw 'Tente novamente mais tarde.';
      }
    }
}

async function createdSupplierProducts( dataSupplierProducts ) {
    try {
      await axios.post(`${API_URL}/supplier/register-products`, dataSupplierProducts );

      return;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        throw err.response.data.message;
      } else {
        throw 'Tente novamente mais tarde.';
      }
    }
}

async function getAllSupplierProducts() {
  try {
    const response = await axios.get(`${API_URL}/supplier/`);

    return response.data;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw err.response.data.message;
    } else {
      throw 'Tente novamente mais tarde.';
    }
  }
}

const SupplierService = {
  createdSupplier,
  createdSupplierProducts,
  getAllSupplierProducts
};

export default SupplierService;