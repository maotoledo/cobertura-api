import Sequelize from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('tbl_vehiculo_clientes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_vehiculo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_marca: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_vehiculo_clientes',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
