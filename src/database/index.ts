import { DATABASE_URI, NODE_ENV } from '@config';
import { connect, set } from 'mongoose';

export const dbConnection = async () => {
  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  await connect(DATABASE_URI);
};
