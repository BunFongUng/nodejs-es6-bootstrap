require('dotenv').config();
import express from 'express';

// custom configs.
import middlewaresConfig from './configs/middlewares';
import './configs/database';

const app = express();

// set middlewares for app.
middlewaresConfig(app);

app.get('/home', (req, res) => {
  res.send();
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT}`);
  console.log('====================================');
  console.log(`server environment is: ${process.env.NODE_ENV}`);
});
