// models/size.js
module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define('Size', {
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: 'sizes',
      timestamps: false,
    });
  
    return Size;
  };
  