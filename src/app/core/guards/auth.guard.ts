import {inject} from "@angular/core";
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";
import {LOCAL_STORAGE} from "../../shared/utils";
import {IToken} from "../../shared/models/interfaces";

export function authGuard(): boolean {
  const authService = inject(AuthService);
  const localStorage = inject(LOCAL_STORAGE);
  const router = inject(Router);

  const refreshToken: IToken = JSON.parse(localStorage.getItem('accessToken') ?? '')?.refreshToken;

  if (!refreshToken) {
    router.navigateByUrl('/auth');
  }

  return authService.isAuthorized$.value;
}
