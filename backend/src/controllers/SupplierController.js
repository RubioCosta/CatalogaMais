const { Sequelize } = require('sequelize');
const { Op } = require('sequelize');
const Supplier = require('../models/Supplier');
const SupplierProduct = require('../models/SupplierProduct');
const Product = require('../models/Product')
const Category = require('../models/Category')

const { cnpj } = require('cpf-cnpj-validator');

module.exports = class SupplierController {

  // All Products Supplier
  static async getAllProductsSupplier(req, res) {

    try {

      const dataSupplier = await Supplier.findAll({ attributes: ['id', 'name'] });

      const arrayData = [];
      
      await Promise.all(dataSupplier.map(async (supplier) => {
          const objSupplier = { ...supplier.dataValues };
      
          // Supplier Category
          const dataProductsSupplier = await SupplierProduct.findAll({
              where: { supplier_id: supplier.id },
              raw: true,
              attributes: ['supplier_id', 'product_id']
          });
      
          objSupplier.products = [];
      
          await Promise.all(dataProductsSupplier.map(async (productSupplier) => {

              // Product
              const dataProduct = await Product.findOne({
                  where: { id: productSupplier.product_id },
                  raw: true,
                  attributes: ['id', 'name', 'category_id']
              });
      
              const objProduct = { ...dataProduct };
      
              // Category
              const dataCategory = await Category.findOne({
                  where: { id: dataProduct.category_id },
                  raw: true,
                  attributes: ['id', 'name']
              });
      
              objProduct.category = dataCategory;
              objSupplier.products.push(objProduct);
          }));
      
          arrayData.push(objSupplier);
      }));
      
      if (arrayData.length <= 0) {
          return res.status(400).json({
              status: 'aviso',
              message: 'Nenhum cadastro encontrado!',
              data: []
          });
      }
      
      res.status(200).json({
          status: 'sucesso',
          message: 'Dados obtidos com sucesso!',
          data: arrayData
      });

    }catch(err) {
      res.status(400).json({
        status: 'erro',
        message: 'Não foi possível obter os dados!',
        error: err.message
      });
    }
  }

  // Created Supplier
  static async createdSupplier(req, res) {
    
    const { name, cnpjSupplier } = req.body;

    if (!name) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo nome é obrigatório!',
      });
    }

    if (!cnpjSupplier) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo cnpj é obrigatório!',
      });
    }

    if (!cnpj.isValid(cnpjSupplier)) {
      return res.status(400).json({
        status: 'aviso',
        message: 'CNPJ inválido!',
      });
    }

    try {

      const cnpjFormatted = cnpjSupplier.replace(/\D/g, '');

      const supplier = await Supplier.findOne( { where: { cnpj: cnpjFormatted } } )

      if (supplier) {
        return res.status(400).json({
          status: 'aviso',
          message: 'CNPJ do fornecedor já cadastrado!',
        });
      }

      const supllierData = {
        name,
        cnpj: cnpjFormatted,
      }
      
      const newSupplier = await Supplier.create(supllierData)

      res.status(200).json({
        status: 'sucesso',
        message: 'Fornecedor cadastrado com sucesso!',
        data: newSupplier
      });

    }catch(err) {
      res.status(400).json({
        status: 'erro',
        message: 'Não foi possível finalizar o cadastro do fornecedor!',
        error: err.message
      });
    }

  }

  // Created Products Supplier
  static async createdProductsSupplier(req, res) {
  
    const { idSupplier, products } = req.body;

    console.log('Id: ', idSupplier)
    console.log('product: ', products)
    
    if (!idSupplier) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo id fornecedor é obrigatório!',
      });
    }

    if (!products && products.length <= 0) {
      return res.status(400).json({
        status: 'aviso',
        message: 'Campo de produtos é obrigatório!',
      });
    }

    try {

      const supplier = await Supplier.findOne( { where: { id: idSupplier } } )
      
      if (!supplier) {
        return res.status(400).json({
          status: 'aviso',
          message: 'Fornecedor não cadastrado!',
        });
      }

      await Promise.all(products.map(async (item) => {

        const product = await Product.findOne( { where: { id: item.id } } );

        if (!product) {
          throw new Error("Item não cadastrado!");
        }

        const supplierProductData = {
          product_id: item.id,
          supplier_id: idSupplier
        }

        const supplierProduct = await SupplierProduct.findOne( { where: supplierProductData } )

        if (supplierProduct) return;

        await SupplierProduct.create(supplierProductData)

        })
      )
      
      res.status(200).json({
        status: 'sucesso',
        message: 'Produtos do fornecedor cadastrado com sucesso!',
      });

    }catch(err) {
      res.status(400).json({
        status: 'erro',
        message: 'Não foi possível finalizar o cadastro dos produtos do fornecedor!',
        error: err.message
      });
    }

  }
}