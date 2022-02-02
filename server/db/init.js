import sequelizeConnection from './config.js';

import Gelato from './model/gelato.js'

const dbInit = () => {
  try {
    sequelizeConnection.sync({ force: true });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
}

export default dbInit;