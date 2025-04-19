import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  authServiceUrl: process.env.AUTH_SERVICE_URL,
  socketServiceUrl: process.env.SOCKET_SERVICE_URL,
  jwtSecret: process.env.JWT_SECRET,
  isProduction: process.env.NODE_ENV,
};