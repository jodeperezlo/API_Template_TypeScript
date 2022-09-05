import mongoose from 'mongoose';
import config from './config';

const dbConnection = async () => {
  try {
    const db = await mongoose.connect(config.MONGO_CONNECTION_STRING, {
      dbName: config.MONGO_DATABASE,
    });
    require('../api/v1/models/CT_GeneralTypes');
    require('../api/v1/models/CT_Types');
    require('../api/v1/models/CT_People');
    console.log('Database is connected to:', db.connection.name);
  } catch (error) {
    console.log('Error in connection to database: ', error);
  }
};

export default dbConnection;
