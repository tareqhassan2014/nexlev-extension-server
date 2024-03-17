import { DB_DATABASE, DB_HOST, DB_PORT, NODE_ENV } from '@config';
import { connect, set } from 'mongoose';

export const dbConnection = async () => {
  const url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  await connect(url);
};
