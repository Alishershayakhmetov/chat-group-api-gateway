import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import config from '../config/index.js';

const router = Router();

const authServiceProxy = createProxyMiddleware({
  target: config.authServiceUrl,
  changeOrigin: true,
  pathRewrite: {
    '^/auth': '',
  },
});

router.use('/', authServiceProxy);

export default router;