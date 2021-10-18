import LoggerPino from 'pino';
import LoggerBase from './logger-base';
import dayjs from 'dayjs';

class PinoLogger extends LoggerBase<LoggerPino.Logger> {
  setup(): void {
    this._logger = LoggerPino({
      prettyPrint: true,
      base: {
        pid: false,
      },
      timestamp: () => `,"time:"${dayjs().format()}"`,
    });
    this._logger.level = this._logLevel;
  }

  log(message: string): void {
    this._logger.info(message);
  }

  debug(tag: string, message: string, ...args: any[]): void {
    this._logger.debug(`[${tag}] ${message}`, ...args);
  }

  error(tag: string, message: string, ...args: any[]): void {
    this._logger.error(`[${tag}] ${message}`, ...args);
  }

  fatal(tag: string, message: string, ...args: any[]): void {
    this._logger.fatal(`[${tag}] ${message}`, ...args);
  }

  info(tag: string, message: string, ...args: any[]): void {
    this._logger.info(`[${tag}] ${message}`, ...args);
  }

  trace(tag: string, message: string, ...args: any[]): void {
    this._logger.trace(`[${tag}] ${message}`, ...args);
  }

  warn(tag: string, message: string, ...args: any[]): void {
    this._logger.warn(`[${tag}] ${message}`, ...args);
  }
}

export default PinoLogger;
