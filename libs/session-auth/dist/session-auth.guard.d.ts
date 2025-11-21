import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class SessionGuard implements CanActivate {
    #private;
    private readonly reflector;
    canActivate(context: ExecutionContext): boolean;
}
