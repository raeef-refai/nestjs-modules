"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoSessionAuthentication = exports.IgnoreSessionAuthentication = void 0;
const common_1 = require("@nestjs/common");
const session_auth_token_1 = require("./session-auth.token");
const IgnoreSessionAuthentication = () => (0, common_1.SetMetadata)(session_auth_token_1.IGNORE_SESSION_AUTHENTICATION_TOKEN, true);
exports.IgnoreSessionAuthentication = IgnoreSessionAuthentication;
const NoSessionAuthentication = () => (0, common_1.SetMetadata)(session_auth_token_1.NO_SESSION_AUTHENTICATION_TOKEN, true);
exports.NoSessionAuthentication = NoSessionAuthentication;
//# sourceMappingURL=session-auth.decorator.js.map