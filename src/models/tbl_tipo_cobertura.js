import Sequelize from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('tbl_tipo_cobertura', {
    id_tipo_cobertura: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_tipo_cobertura',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tipo_cobertura" },
        ]
      },
    ]
  });
};
