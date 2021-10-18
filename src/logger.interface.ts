interface ILogger {
    log(message: string): void;
    trace(tag: string, message: string, ...args: any[]): void
    debug(tag: string, message: string, ...args: any[]): void
    info(tag: string, message: string, ...args: any[]): void
    warn(tag: string, message: string, ...args: any[]): void
    error(tag: string, message: string, ...args: any[]): void
    fatal(tag: string, message: string, ...args: any[]): void
}

export default ILogger;