import winston from 'winston';

/**
    levels?: Config.AbstractConfigSetLevels;
    silent?: boolean;
    format?: logform.Format;
    level?: string;
    exitOnError?: Function | boolean;
    defaultMeta?: any;
    transports?: Transport[] | Transport;
    handleExceptions?: boolean;
    exceptionHandlers?: any;
 */

winston.add(new winston.transports.Console());

export default winston;
