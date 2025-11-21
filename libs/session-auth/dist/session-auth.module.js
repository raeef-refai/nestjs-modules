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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionAuthModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const express_session_1 = __importDefault(require("express-session"));
const session_auth_guard_1 = require("./session-auth.guard");
const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } = new common_1.ConfigurableModuleBuilder().build();
let SessionAuthModule = class SessionAuthModule extends ConfigurableModuleClass {
    options;
    configure(consumer) {
        consumer.apply((0, express_session_1.default)(this.options.sessionOptions)).forRoutes('*');
    }
};
exports.SessionAuthModule = SessionAuthModule;
__decorate([
    (0, common_1.Inject)(MODULE_OPTIONS_TOKEN),
    __metadata("design:type", Object)
], SessionAuthModule.prototype, "options", void 0);
exports.SessionAuthModule = SessionAuthModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: session_auth_guard_1.SessionGuard,
            },
        ],
    })
], SessionAuthModule);
//# sourceMappingURL=session-auth.module.js.map