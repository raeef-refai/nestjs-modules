import { IGNORE_SESSION_AUTHENTICATION_TOKEN, NO_SESSION_AUTHENTICATION_TOKEN } from './session-auth.token';
export declare const IgnoreSessionAuthentication: () => import("@nestjs/common").CustomDecorator<typeof IGNORE_SESSION_AUTHENTICATION_TOKEN>;
export declare const NoSessionAuthentication: () => import("@nestjs/common").CustomDecorator<typeof NO_SESSION_AUTHENTICATION_TOKEN>;
