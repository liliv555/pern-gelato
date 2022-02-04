import 'dotenv/config'
import { Sequelize } from 'sequelize';

const dbName = process.env.PG_DB;
const dbUser = process.env.PG_USER;
const dbHost = process.env.PG_HOST;
const dbPassword = process.env.PG_PASSWORD;

let sequelizeConnection = undefined;

if (process.env.NODE_ENV === "production") {
  sequelizeConnection = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
  });
} else {
  sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres'
  });
}

export default sequelizeConnection;