import app from './app.js';
import config from './config/index.js';

const { port } = config;

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});