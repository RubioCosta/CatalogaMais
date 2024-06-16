import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

async function createdCategory( dataCategory ) {
    try {
      await axios.post(`${API_URL}/category`, dataCategory );

      return;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        throw err.response.data.message;
      } else {
        throw 'Tente novamente mais tarde.';
      }
    }
}

async function getAllCategory() {
  try {
    const response = await axios.get(`${API_URL}/category/`);

    const categorys = response.data.data.map(category => {
      return {
        label: category.name,
        value: category.id
      }
    });

    return categorys;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw err.response.data.message;
    } else {
      throw 'Tente novamente mais tarde.';
    }
  }
}

async function deleteCategory(idCategory) {
  try {
    await axios.delete(`${API_URL}/category/${idCategory}`);

    return;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw err.response.data.message;
    } else {
      throw 'Tente novamente mais tarde.';
    }
  }
}

async function updateCategory(dataCategory) {
  try {
    await axios.put(`${API_URL}/category/`, dataCategory);

    return;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw err.response.data.message;
    } else {
      throw 'Tente novamente mais tarde.';
    }
  }
}

const CategoryService = {
  createdCategory,
  getAllCategory,
  deleteCategory,
  updateCategory
};

export default CategoryService;