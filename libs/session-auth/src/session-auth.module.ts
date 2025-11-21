import {
  ConfigurableModuleBuilder,
  Inject,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import session, { SessionOptions } from 'express-session';
import { SessionGuard } from './session-auth.guard';

interface SessionAuthModuleOptions {
  readonly sessionOptions: SessionOptions;
}

const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<SessionAuthModuleOptions>().build();

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: SessionGuard,
    },
  ],
})
export class SessionAuthModule
  extends ConfigurableModuleClass
  implements NestModule
{
  @Inject(MODULE_OPTIONS_TOKEN)
  private readonly options!: SessionAuthModuleOptions;

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(session(this.options.sessionOptions)).forRoutes('*');
  }
}
