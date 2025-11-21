import { SetMetadata } from '@nestjs/common';
import {
  IGNORE_SESSION_AUTHENTICATION_TOKEN,
  NO_SESSION_AUTHENTICATION_TOKEN,
} from './session-auth.token';

export const IgnoreSessionAuthentication = () =>
  SetMetadata(IGNORE_SESSION_AUTHENTICATION_TOKEN, true);

export const NoSessionAuthentication = () =>
  SetMetadata(NO_SESSION_AUTHENTICATION_TOKEN, true);
