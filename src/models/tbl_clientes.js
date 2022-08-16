import Sequelize from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('tbl_clientes', {
    id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dpi: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nit: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_clientes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
};
