"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const session_auth_token_1 = require("./session-auth.token");
let SessionGuard = class SessionGuard {
    reflector;
    canActivate(context) {
        const authenticationIgnored = this.reflector.getAllAndOverride(session_auth_token_1.IGNORE_SESSION_AUTHENTICATION_TOKEN, [context.getHandler(), context.getClass()]);
        if (authenticationIgnored)
            return true;
        const request = context.switchToHttp().getRequest();
        const authInfo = this.#extractAuthInfoFromRequest(request);
        const sessionNotNeeded = this.reflector.getAllAndOverride(session_auth_token_1.NO_SESSION_AUTHENTICATION_TOKEN, [context.getHandler(), context.getClass()]) || false;
        return sessionNotNeeded === !authInfo;
    }
    #extractAuthInfoFromRequest(request) {
        return request.session.authInfo;
    }
};
exports.SessionGuard = SessionGuard;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", core_1.Reflector)
], SessionGuard.prototype, "reflector", void 0);
exports.SessionGuard = SessionGuard = __decorate([
    (0, common_1.Injectable)()
], SessionGuard);
//# sourceMappingURL=session-auth.guard.js.map