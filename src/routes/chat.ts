import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import config from '../config/index.js';

const router = Router();

const socketServiceProxy = createProxyMiddleware({
  target: config.socketServiceUrl,
  changeOrigin: true,
  ws: true, // Enable WebSocket proxying
  pathRewrite: {
    '^/chat': '',
  },
});

router.use('/', socketServiceProxy);

export default router;