module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define('Size', {
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'sizes'
  });

  Size.associate = (models) => {
    // Cambia 'shoes' por 'Shoe' si el alias en el otro modelo es 'Shoe'
    Size.belongsToMany(models.Shoe, { through: models.ShoeSizes, foreignKey: 'sizeId', as: 'shoes' });
  };

  return Size;
};
