import compression from 'compression';
import bodyParser from 'body-parser';
import logger from 'morgan';
import expressValidator from 'express-validator';
import cors from 'cors';

export default app => {
  app.use(compression());
  app.use(logger('dev'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(expressValidator());
};
