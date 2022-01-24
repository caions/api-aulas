import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ message, label, timestamp }) => {
  return `[${label}]: ${message} ${timestamp}`;
});

const logger = createLogger({
  transports: [
    new transports.File({
      filename: 'debug.log',
      level: 'debug',
      format: combine(label({ label: 'INFO' }), timestamp(), myFormat),
    }),
    new transports.File({
      filename: 'warn.log',
      level: 'warn',
      format: combine(label({ label: 'WARN' }), timestamp(), myFormat),
    }),
    new transports.File({
      filename: 'error.log',
      level: 'error',
      format: combine(label({ label: 'ERROR' }), timestamp(), myFormat),
    }),
  ],
});

export default logger;
