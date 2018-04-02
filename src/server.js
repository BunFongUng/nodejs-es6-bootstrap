require('dotenv').config();
import express from 'express';

// custom configs.
import './configs/database';
import middlewaresConfig from './configs/middlewares';
import appRoutes from './modules';

const app = express();

// set middlewares for app.
middlewaresConfig(app);

// load app routes
app.use('/api/v1', appRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT}`);
  console.log('====================================');
  console.log(`server environment is: ${process.env.NODE_ENV}`);
});
