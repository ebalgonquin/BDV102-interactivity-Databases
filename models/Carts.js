const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Product = require('./product');

const Cart = sequelize.define('Cart', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
}, {
  tableName: 'carts'
});

// Relationships
User.hasMany(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User);

Product.hasMany(Cart, { foreignKey: 'productId' });
Cart.belongsTo(Product);

module.exports = Cart;