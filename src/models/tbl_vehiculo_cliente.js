import Sequelize from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('tbl_vehiculo_cliente', {
    id_vehiculo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_marca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tbl_marcas',
        key: 'id_marca'
      }
    }
  }, {
    sequelize,
    tableName: 'tbl_vehiculo_cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_vehiculo" },
          { name: "id_cliente" },
          { name: "id_marca" },
        ]
      },
      {
        name: "fk_tbl_vehiculo_cliente_tbl_marcas1_idx",
        using: "BTREE",
        fields: [
          { name: "id_marca" },
        ]
      },
    ]
  });
};
