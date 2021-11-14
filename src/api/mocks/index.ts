import { setupWorker } from 'msw';
import {
  loginErrorHandler,
  logoutSuccessHandler,
  nicknameValidateHandler,
  signupSuccessHandler,
  userInfoHandler,
} from '~/api/mocks/auth';
import {
  getPopularWineNotesSuccessHandler,
  getWineNotesHandler,
} from '~/api/mocks/wine-note';

export const worker = setupWorker(
  loginErrorHandler,
  signupSuccessHandler,
  nicknameValidateHandler,
  userInfoHandler,
  logoutSuccessHandler,
  getWineNotesHandler,
  getPopularWineNotesSuccessHandler,
);
