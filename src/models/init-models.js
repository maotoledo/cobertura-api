import { DataTypes as DataTypes } from "sequelize";
import _poliza_cliente from "./poliza_cliente.js";
import _tbl_clientes from "./tbl_clientes.js";
import _tbl_marcas from "./tbl_marcas.js";
import _tbl_tipo_cobertura from "./tbl_tipo_cobertura.js";
import _tbl_tipo_poliza from "./tbl_tipo_poliza.js";
import _tbl_vehiculo_cliente from "./tbl_vehiculo_cliente.js";
import _tbl_vehiculo_clientes from "./tbl_vehiculo_clientes.js";

function initModels(sequelize) {
  var poliza_cliente = _poliza_cliente(sequelize, DataTypes);
  var tbl_clientes = _tbl_clientes(sequelize, DataTypes);
  var tbl_marcas = _tbl_marcas(sequelize, DataTypes);
  var tbl_tipo_cobertura = _tbl_tipo_cobertura(sequelize, DataTypes);
  var tbl_tipo_poliza = _tbl_tipo_poliza(sequelize, DataTypes);
  var tbl_vehiculo_cliente = _tbl_vehiculo_cliente(sequelize, DataTypes);
  var tbl_vehiculo_clientes = _tbl_vehiculo_clientes(sequelize, DataTypes);

  tbl_clientes.belongsToMany(tbl_tipo_poliza, { as: 'id_tipo_poliza_tbl_tipo_polizas', through: poliza_cliente, foreignKey: "id_cliente", otherKey: "id_tipo_poliza" });
  tbl_tipo_poliza.belongsToMany(tbl_clientes, { as: 'id_cliente_tbl_clientes', through: poliza_cliente, foreignKey: "id_tipo_poliza", otherKey: "id_cliente" });
  poliza_cliente.belongsTo(tbl_clientes, { as: "id_cliente_tbl_cliente", foreignKey: "id_cliente"});
  tbl_clientes.hasMany(poliza_cliente, { as: "poliza_clientes", foreignKey: "id_cliente"});
  tbl_vehiculo_cliente.belongsTo(tbl_marcas, { as: "id_marca_tbl_marca", foreignKey: "id_marca"});
  tbl_marcas.hasMany(tbl_vehiculo_cliente, { as: "tbl_vehiculo_clientes", foreignKey: "id_marca"});
  tbl_tipo_poliza.belongsTo(tbl_tipo_cobertura, { as: "id_cobertura_tbl_tipo_cobertura", foreignKey: "id_cobertura"});
  tbl_tipo_cobertura.hasMany(tbl_tipo_poliza, { as: "tbl_tipo_polizas", foreignKey: "id_cobertura"});
  poliza_cliente.belongsTo(tbl_tipo_poliza, { as: "id_tipo_poliza_tbl_tipo_poliza", foreignKey: "id_tipo_poliza"});
  tbl_tipo_poliza.hasMany(poliza_cliente, { as: "poliza_clientes", foreignKey: "id_tipo_poliza"});
  poliza_cliente.belongsTo(tbl_vehiculo_cliente, { as: "tbl_vehiculo_cliente_id_vehiculo_tbl_vehiculo_cliente", foreignKey: "tbl_vehiculo_cliente_id_vehiculo"});
  tbl_vehiculo_cliente.hasMany(poliza_cliente, { as: "poliza_clientes", foreignKey: "tbl_vehiculo_cliente_id_vehiculo"});
  poliza_cliente.belongsTo(tbl_vehiculo_cliente, { as: "tbl_vehiculo_cliente_id_cliente_tbl_vehiculo_cliente", foreignKey: "tbl_vehiculo_cliente_id_cliente"});
  tbl_vehiculo_cliente.hasMany(poliza_cliente, { as: "tbl_vehiculo_cliente_id_cliente_poliza_clientes", foreignKey: "tbl_vehiculo_cliente_id_cliente"});
  poliza_cliente.belongsTo(tbl_vehiculo_cliente, { as: "tbl_vehiculo_cliente_id_marca_tbl_vehiculo_cliente", foreignKey: "tbl_vehiculo_cliente_id_marca"});
  tbl_vehiculo_cliente.hasMany(poliza_cliente, { as: "tbl_vehiculo_cliente_id_marca_poliza_clientes", foreignKey: "tbl_vehiculo_cliente_id_marca"});

  return {
    poliza_cliente,
    tbl_clientes,
    tbl_marcas,
    tbl_tipo_cobertura,
    tbl_tipo_poliza,
    tbl_vehiculo_cliente,
    tbl_vehiculo_clientes,
  };
}
// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;

export default initModels;