import pino from 'pino';

// Create a logger instance with pretty printing
const logger = pino({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname'
    }
  }
});

// Placeholder for future services
export const exampleService = {
  getData: () => {
    logger.info('Fetching service data');
    logger.debug('Service data retrieved successfully');
    return 'Service data';
  },

  logExample: () => {
    logger.info('This is an info message');
    logger.warn('This is a warning message');
    logger.error('This is an error message');
    logger.debug('This is a debug message');
  }
};

export { logger };
