require('dotenv').config();
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

try {
  if (process.env.NODE_ENV === 'development') {
    mongoose.connect(process.env.DEV_DB_URL);
  } else {
    mongoose.connect(process.env.PROD_DB_URL);
  }
} catch (error) {
  if (process.env.NODE_ENV === 'development') {
    mongoose.createConnection(process.env.DEV_DB_URL);
  } else {
    mongoose.createConnection(process.env.PROD_DB_URL);
  }
}

mongoose.connection
  .once('open', () => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`MongoDB connected to: ${process.env.DEV_DB_URL}`);
    } else {
      console.log(`MongoDB connected to: ${process.env.PROD_DB_URL}`);
    }
  })
  .on('error', err => {
    throw err;
  });
