enum ConsoleMethods {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error'
}

const shouldLogToConsole = (consoleMethod: ConsoleMethods) => consoleMethod !== ConsoleMethods.DEBUG || process.env.NODE_ENV !== 'production';

const logToConsole = (consoleMethod: ConsoleMethods, ...args: unknown[]) => {
  if (shouldLogToConsole(consoleMethod)) {
    // eslint-disable-next-line no-console
    console[consoleMethod](...args);
  }
};

const logger = {
  debug: (...args: unknown[]) => logToConsole(ConsoleMethods.DEBUG, ...args),
  info: (...args: unknown[]) => logToConsole(ConsoleMethods.INFO, ...args),
  warning: (...args: unknown[]) => logToConsole(ConsoleMethods.WARN, ...args),
  error: (...args: unknown[]) => logToConsole(ConsoleMethods.ERROR, ...args)
};

export default logger;
