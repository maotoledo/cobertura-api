import Sequelize from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('poliza_cliente', {
    id_contrato: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    fecha_contrato: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_inicio_cobertura: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_fin_contrato: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tiempo_contrato: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tbl_clientes',
        key: 'id_cliente'
      }
    },
    id_tipo_poliza: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tbl_tipo_poliza',
        key: 'id_tipo_poliza'
      }
    },
    tbl_vehiculo_cliente_id_vehiculo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tbl_vehiculo_cliente',
        key: 'id_vehiculo'
      }
    },
    tbl_vehiculo_cliente_id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tbl_vehiculo_cliente',
        key: 'id_cliente'
      }
    },
    tbl_vehiculo_cliente_id_marca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tbl_vehiculo_cliente',
        key: 'id_marca'
      }
    }
  }, {
    sequelize,
    tableName: 'poliza_cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_contrato" },
          { name: "id_cliente" },
          { name: "id_tipo_poliza" },
        ]
      },
      {
        name: "fk_poliza_cliente_tbl_clientes1_idx",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "fk_poliza_cliente_tbl_tipo_poliza1_idx",
        using: "BTREE",
        fields: [
          { name: "id_tipo_poliza" },
        ]
      },
      {
        name: "fk_poliza_cliente_tbl_vehiculo_cliente1_idx",
        using: "BTREE",
        fields: [
          { name: "tbl_vehiculo_cliente_id_vehiculo" },
          { name: "tbl_vehiculo_cliente_id_cliente" },
          { name: "tbl_vehiculo_cliente_id_marca" },
        ]
      },
    ]
  });
};
