const Category = require('../models/Category')

module.exports = class CategoryController {
  
  // Update Category
  static async updateCategory(req, res) {

    const { id, name } = req.body;

    if (!id) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo id é obrigatório!',
      });
    }

    if (!name) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo nome é obrigatório!',
      });
    }

    try {

      const category = await Category.findOne( { where: { id } } );

      if (!category) {
        return res.status(400).json({
          status: 'aviso',
          message: 'Categoria não cadastrada!',
        });
      }

      await Category.update( { name }, { where: { id } } )

      res.status(200).json({
        status: 'sucesso',
        message: 'Categoria atualizada com sucesso!',
      });

    }catch(err) {
      res.status(400).json({
        status: 'erro',
        message: 'Não foi possível atualizar categoria!',
        error: err.message
      });
    }

  }

  // Delete Category
  static async deleteCategory(req, res) {

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo id é obrigatório!',
      });
    }

    try {

      const category = await Category.findOne( { where: { id } } );

      if (!category) {
        return res.status(400).json({
          status: 'aviso',
          message: 'Categoria não cadastrada!',
        });
      }

      await category.destroy();

      res.status(200).json({
        status: 'sucesso',
        message: 'Categoria deletada com sucesso!',
      });

    }catch(err) {
      res.status(400).json({
        status: 'erro',
        message: 'Não foi possível deletar categoria!',
        error: err.message
      });
    }

  }

  // Created Category
  static async createdCategory(req, res) {
    
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo nome é obrigatório!',
      });
    }

    try {

      await Category.create( { name } )

      res.status(200).json({
        status: 'sucesso',
        message: 'Categoria cadastrada!',
      });

    }catch(err) {
      res.status(400).json({
        status: 'erro',
        message: 'Não foi possível finalizar o cadastro da categoria!',
        error: err.message
      });
    }

  }

  // Get Category
  static async getCategoryById(req, res) {
    
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo id é obrigatório!',
      });
    }

    try {

      const category = await Category.findOne( { where: { id } } );

      if (!category) {
        return res.status(400).json({
          status: 'aviso',
          message: 'Categoria não cadastrada!',
        });
      }

      res.status(200).json({
        status: 'sucesso',
        message: 'Busca realizada com sucesso!',
        data: category
      });

    }catch(err) {
      res.status(400).json({
        status: 'erro',
        message: 'Não foi possível finalizar a busca da categoria!',
        error: err.message
      });
    }

  }

  // Get All Category
  static async getAllCategory(req, res) {

    try {

      const categorys = await Category.findAll();

      if (!categorys) {
        return res.status(400).json({
          status: 'aviso',
          message: 'Não existe categorias cadastradas!',
        });
      }

      res.status(200).json({
        status: 'sucesso',
        message: 'Busca realizada com sucesso!',
        data: categorys
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