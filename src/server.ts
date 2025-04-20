import app from './app.js';
import dotenv from 'dotenv/config';

const port = process.env.PORT || 3009;

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});