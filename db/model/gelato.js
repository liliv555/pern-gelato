import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config.js';

class Gelato extends Model {}

Gelato.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imageUrl: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: 'Gelato'
  });
    
  export default Gelato;