// models/shoe.js
module.exports = (sequelize, DataTypes) => {
    const Shoe = sequelize.define('Shoe', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      gender: {
        type: DataTypes.ENUM('male', 'female', 'unisex')
      },
      sport: {
        type: DataTypes.ENUM('running', 'basketball', 'tennis', 'trekking')
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'shoes' // Asegúrate de que el nombre de la tabla sea correcto
    });
  
    Shoe.associate = (models) => {
      // Asociaciones pueden ser definidas aquí
    };
  
    return Shoe;
  };
  