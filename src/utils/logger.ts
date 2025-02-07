import morgan from "morgan";
import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] , [${level}] , [${message}]`;
    })
  ),
  transports: [new transports.Console()],
});

const httpLogger = morgan("combined", {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
});

export { logger, httpLogger };
