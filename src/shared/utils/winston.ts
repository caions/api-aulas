import { createLogger, format, transports } from 'winston';
const { combine, printf, timestamp } = format;

const myFormat = printf(({ message, level, timestamp }) => {
  return `[${level}]: ${message} ${timestamp}`;
});

const logger = createLogger({
  level: 'debug',
  transports: [
    new transports.File({
      filename: 'debug.log',
      format: combine(timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), myFormat),
    }),
    new transports.Console({
      format: format.simple(),
    }),
  ],
});

export default logger;
