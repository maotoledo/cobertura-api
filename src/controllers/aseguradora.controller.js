import initModels from "../models/init-models.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'aseguradora',
    'admin',
    'AdM!n$uPo0rT.2022',
    {
        host: 'aseguradora.cbrvpgzwo1jx.us-east-2.rds.amazonaws.com',
        dialect: 'mysql'
    }
);
var models = initModels(sequelize);

export async function getClientes(req, res) {
  try {
    const cliente = await models.poliza_cliente.findAll({});
    res.json(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
