import dotenv from 'dotenv';

dotenv.config();

export default {
  API_PROTOCOL: process.env.API_PROTOCOL || 'http',
  API_HOST: process.env.API_HOST || 'localhost',
  API_PORT: process.env.API_PORT || 4000,
  API_URL: process.env.API_URL || '/api/v1',
  MONGO_CONNECTION_STRING:
    process.env.MONGO_CONNECTION_STRING ||
    'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000',
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'dbsecurity',
  MONGO_USER: process.env.MONGO_USER || 'admin',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost',
  FRONTEND_PORT: process.env.FRONTEND_PORT || 3000,
  SECRET_KEY: process.env.SECRET_KEY || 'SecretKey',
  EMAIL_HOST: process.env.EMAIL_HOST || 'smtp.gmail.com',
  EMAIL_PORT: process.env.EMAIL_PORT || '465',
  EMAIL_USER: process.env.EMAIL_USER || 'admim@gmail.com',
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || 'admin',
};
