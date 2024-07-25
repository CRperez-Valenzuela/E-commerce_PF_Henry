// models/shoesizes.js
module.exports = (sequelize, DataTypes) => {
    const ShoeSizes = sequelize.define('ShoeSizes', {
      shoeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'shoes',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      sizeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'sizes',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    }, {
      tableName: 'shoesizes', // Asegúrate de que el nombre de la tabla sea correcto
      timestamps: false
    });
  
    ShoeSizes.associate = (models) => {
      // Asociaciones pueden ser definidas aquí
    };
  
    return ShoeSizes;
  };
  