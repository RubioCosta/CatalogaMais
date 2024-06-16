const Product = require('../models/Product');
const Category = require('../models/Category')

module.exports = class ProductController {
  
  // Created Product
  static async createdProduct(req, res) {
    const { name, idCategory } = req.body;

    if (!name) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo nome é obrigatório!',
      });
    }

    if (!idCategory) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo id categoria é obrigatório!',
      });
    }

    try {

      const category = await Category.findOne( { where: { id: idCategory } } );

      if (!category) {
        return res.status(400).json({
          status: 'aviso',
          message: 'Categoria não cadastrada!',
        });
      }

      await Product.create( { name, category_id: idCategory } );

      res.status(200).json({
        status: 'sucesso',
        message: 'Produto cadastrado!',
      });

    }catch(err) {
      res.status(400).json({
        status: 'erro',
        message: 'Não foi possível finalizar o cadastro do produto!',
        error: err.message
      });
    }
  }

  // Get Product
  static async getProductById(req, res) {

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo id é obrigatório!',
      });
    }

    try {

      const product = await Product.findOne( { where: { id } } );

      if (!product) {
        return res.status(400).json({
          status: 'aviso',
          message: 'Produto não cadastrado!',
        });
      }

      res.status(200).json({
        status: 'sucesso',
        message: 'Busca realizada com sucesso!',
        data: product
      });

    }catch(err) {
      res.status(400).json({
        status: 'erro',
        message: 'Não foi possível finalizar a busca do produto!',
        error: err.message
      });
    }
  }

  // Get All Product
  static async getAllProduct(req, res) {

    try {

      const products = await Product.findAll();

      if (!products) {
        return res.status(400).json({
          status: 'aviso',
          message: 'Não existe produtos cadastrados!',
        });
      }

      res.status(200).json({
        status: 'sucesso',
        message: 'Busca realizada com sucesso!',
        data: products
      });

    }catch(err) {
      res.status(400).json({
        status: 'erro',
        message: 'Não foi possível finalizar a busca das categorias!',
        error: err.message
      });
    }

  }
}