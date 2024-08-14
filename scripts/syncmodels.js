// scripts/syncModels.js
const { Sequelize } = require('sequelize');
const sequelize = require('../config/config');
const { User, Shoe, Size, ShoeSizes, Addresses, Order, Orderitem, Wishlist, Useraddresses } = require('../models');

const syncModels = async () => {
  try {
    // Sincronizar modelos con `alter: true` para aplicar cambios sin borrar datos
    await sequelize.sync({ alter: false });
    console.log('Modelos sincronizados con éxito');
  } catch (error) {
    console.error('Error sincronizando modelos:', error);
  } finally {
    await sequelize.close();
  }
};

syncModels();