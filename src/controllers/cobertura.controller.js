import * as dotenv from 'dotenv';
dotenv.config();
import initModels from "../models/init-models.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST_COBERTURA,
    dialect: "mysql",
  }
);
var models = initModels(sequelize);

export async function getClientes(req, res) {
  try {
    const cliente = await models.tbl_clientes.findAll({
      include: [{
        model: models.poliza_cliente,
        as: 'poliza_clientes',
        include: [{
          model: models.tbl_vehiculo_cliente,
          as: 'tbl_vehiculo_cliente_id_cliente_tbl_vehiculo_cliente',
          include: [{
            model: models.tbl_marcas,
            as: 'id_marca_tbl_marca'
          }]
        }, {
          model: models.tbl_tipo_poliza,
          as: 'id_tipo_poliza_tbl_tipo_poliza',
          include: [{
            model: models.tbl_tipo_cobertura,
            as: 'id_cobertura_tbl_tipo_cobertura'
          }]
        }]
      }],
    });
    res.json(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getClient(req, res) {
  console.log(req.params);
  const { id_cliente } = req.params;
  try {
    const project = await models.tbl_clientes.findOne({
      include: [{
        model: models.poliza_cliente,
        as: 'poliza_clientes',
        include: [{
          model: models.tbl_vehiculo_cliente,
          as: 'tbl_vehiculo_cliente_id_cliente_tbl_vehiculo_cliente',
          include: [{
            model: models.tbl_marcas,
            as: 'id_marca_tbl_marca'
          }]
        }, {
          model: models.tbl_tipo_poliza,
          as: 'id_tipo_poliza_tbl_tipo_poliza',
          include: [{
            model: models.tbl_tipo_cobertura,
            as: 'id_cobertura_tbl_tipo_cobertura'
          }]
        }]
      }],
      where: {
        id_cliente,
      },
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}