import dotenv from 'dotenv';
dotenv.config();

export default {
  authServiceUrl: process.env.AUTH_SERVICE_URL,
  socketServiceUrl: process.env.SOCKET_SERVICE_URL,
  isProduction: process.env.NODE_ENV,
};