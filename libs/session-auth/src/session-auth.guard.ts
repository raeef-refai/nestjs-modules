import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { ISessionAuthInfo, ISessionData } from './session-auth.interface';
import {
  IGNORE_SESSION_AUTHENTICATION_TOKEN,
  NO_SESSION_AUTHENTICATION_TOKEN,
} from './session-auth.token';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const authenticationIgnored = this.reflector.getAllAndOverride<boolean>(
      IGNORE_SESSION_AUTHENTICATION_TOKEN,
      [context.getHandler(), context.getClass()],
    );

    if (authenticationIgnored) return true;

    const request = context.switchToHttp().getRequest<Request>();
    const authInfo = this.#extractAuthInfoFromRequest(request);

    const sessionNotNeeded =
      this.reflector.getAllAndOverride<boolean>(
        NO_SESSION_AUTHENTICATION_TOKEN,
        [context.getHandler(), context.getClass()],
      ) || false;

    return sessionNotNeeded === !authInfo;
  }

  #extractAuthInfoFromRequest(request: Request): ISessionAuthInfo | null {
    return (request.session as unknown as ISessionData).authInfo;
  }
}
