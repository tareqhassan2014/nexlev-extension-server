import { App } from '@/app';
import { routes } from '@/routes';
import { ValidateEnv } from '@utils/validateEnv';
import { logger } from './utils/logger';

process.on('uncaughtException', error => {
  logger.info('=================================');
  console.error(error);
  logger.info('=================================');
});

ValidateEnv();

const app = new App(routes);

app.listen();

process.on('unhandledRejection', error => {
  logger.info('=================================');
  console.error(error);
  logger.info('=================================');
});
