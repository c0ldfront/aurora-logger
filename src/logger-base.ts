import ILogger from "./logger.interface";
import LogLevel from "./log-level.enum";
import {version} from "../package.json";

abstract class LoggerBase<T> implements ILogger {
    protected _logger!: T;
    protected _logLevel: LogLevel;

    constructor(logLevel: LogLevel = LogLevel.OFF) {
        this._logLevel = logLevel;
        this.setup();
        this.info(this.constructor.name, `version ${version}`)
    }

    abstract setup(): void;
    abstract log(message: string): void;
    abstract debug(tag: string, message: string, ...args: any[]): void
    abstract error(tag: string, message: string, ...args: any[]): void
    abstract fatal(tag: string, message: string, ...args: any[]): void
    abstract info(tag: string, message: string, ...args: any[]): void
    abstract trace(tag: string, message: string, ...args: any[]): void
    abstract warn(tag: string, message: string, ...args: any[]): void
}

export default LoggerBase;