import { getLogger, Logger as Logger4JS} from "log4js";
import LoggerBase from "./logger-base";

class Log4JSLogger extends LoggerBase<Logger4JS> {

    setup(): void {
        this._logger = getLogger();
        this._logger.level = this._logLevel;
    }

    log(message: string): void {
        this._logger.log(message);
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

export default Log4JSLogger;