import Sequelize from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('tbl_tipo_poliza', {
    id_tipo_poliza: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    precio: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    id_cobertura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tbl_tipo_cobertura',
        key: 'id_tipo_cobertura'
      }
    }
  }, {
    sequelize,
    tableName: 'tbl_tipo_poliza',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tipo_poliza" },
          { name: "id_cobertura" },
        ]
      },
      {
        name: "fk_tbl_tipo_poliza_tbl_tipo_cobertura1_idx",
        using: "BTREE",
        fields: [
          { name: "id_cobertura" },
        ]
      },
    ]
  });
};
