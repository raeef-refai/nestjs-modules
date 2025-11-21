import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { SessionOptions } from 'express-session';
interface SessionAuthModuleOptions {
    readonly sessionOptions: SessionOptions;
}
declare const ConfigurableModuleClass: import("@nestjs/common").ConfigurableModuleCls<SessionAuthModuleOptions, "register", "create", {}>;
export declare class SessionAuthModule extends ConfigurableModuleClass implements NestModule {
    private readonly options;
    configure(consumer: MiddlewareConsumer): void;
}
export {};
