const express = require('express');
const cors = require('cors');
const conn = require('./db/conn')

const app = express();

// Variables
const PORT = process.env.PORT

// Models
require('./models/Category');
require('./models/Supplier');
require('./models/Product');
require('./models/SupplierProduct');

// Routes Imports
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const supplierRoutes = require('./routes/supplierRoutes');

// Middelewares
app.use(cors())

app.use(
  express.urlencoded({
      extended: true
  })
);

app.use(express.json());

// Routes
app.use('/product', productRoutes)
app.use('/category', categoryRoutes)
app.use('/supplier', supplierRoutes)

app.get("*", (req, res) => {
  res.status(500).json({ 
      error: "Internal Server Error!", 
      message: "Algo deu errado no servidor!" 
  });
});

conn.sync().then(() => {
  app.listen(PORT)
  console.log(`Conectado na porta ${PORT}`)
}).catch((err) => console.log(err))