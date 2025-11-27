const express = require('express');
const app = express();
const sequelize = require('./config/database');

// Middleware
app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/carts');
const orderRoutes = require('./routes/orders');
const categoryRoutes = require('./routes/categories');

// Mount routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);
app.use('/orders', orderRoutes);
app.use('/categories', categoryRoutes);

// Sync Sequelize with Neon
sequelize.sync({ alter: true })
  .then(() => console.log('Database synced with Neon!'))
  .catch(err => console.error('Error syncing database:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require('dotenv').config();