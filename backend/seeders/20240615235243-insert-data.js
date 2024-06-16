'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      { 
        id: 1,
        name: 'Frutas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 2,
        name: 'Vegetais',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 3,
        name: 'Laticínios',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 4,
        name: 'Bebidas',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
    await queryInterface.bulkInsert('products', [
      { 
        id: 1,
        name: 'Maça',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 2,
        name: 'Banana',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 3,
        name: 'Laranja',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 4,
        name: 'Alface',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 5,
        name: 'Cenoura',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 6,
        name: 'Batata',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 7,
        name: 'Leite',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 8,
        name: 'Queijo cheddar',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 9,
        name: 'Creme de leite',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 10,
        name: 'Água mineral',
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 11,
        name: 'Vinho tinto',
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 12,
        name: 'Chá verde',
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    await queryInterface.bulkInsert('suppliers', [
      { 
        id: 1,
        name: 'Airton Ltda',
        cnpj: '26733245000111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 2,
        name: 'Bento S.A.',
        cnpj: '98585765000135',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 3,
        name: 'Carlos & Filhos EIRELI',
        cnpj: '11674585000141',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 4,
        name: 'Dantas Comércio Ltda',
        cnpj: '80874523000104',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    await queryInterface.bulkInsert('supplierproducts', [
      { 
        id: 1,
        supplier_id: 1,
        product_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 2,
        supplier_id: 1,
        product_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 3,
        supplier_id: 1,
        product_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 4,
        supplier_id: 2,
        product_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 5,
        supplier_id: 2,
        product_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 6,
        supplier_id: 2,
        product_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 7,
        supplier_id: 3,
        product_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 8,
        supplier_id: 3,
        product_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 9,
        supplier_id: 3,
        product_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 10,
        supplier_id: 4,
        product_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 11,
        supplier_id: 4,
        product_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 12,
        supplier_id: 4,
        product_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },
};
