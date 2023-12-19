import { Inject, Injectable } from '@angular/core';
import { AuthApi } from '../../shared/api/auth.api';
import { INotificationToken, ISignInParams, IToken, IUser } from '../../shared/models/interfaces';
import { Router } from '@angular/router';
import { NOTIFICATION } from '../../shared/utils/tokens/notification';
import { isTokenExpired } from '../../shared/utils/token';
import { LOCAL_STORAGE } from '../../shared/utils';
import {BehaviorSubject, Observable, tap} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user: IUser | null = null;
  private _isAuthorized$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isAuthorized$(): BehaviorSubject<boolean> {
    return this._isAuthorized$;
  }
  constructor(
    private _authApi: AuthApi,
    private _router: Router,
    @Inject(NOTIFICATION) private _notification: INotificationToken,
    @Inject(LOCAL_STORAGE) private readonly _localStorage: Storage,
  ) {
    this.isAuthorized$.next(!!this._localStorage.getItem('accessToken'));
    // if (this._localStorage.getItem('accessToken')) {
    //   const refreshToken: IToken = JSON.parse(
    //     this._localStorage.getItem('accessToken') ?? '',
    //   )?.refreshToken;
    //   this.refresh(refreshToken).subscribe(
    //     () => {},
    //     () => {
    //       this._updateUser({} as IToken);
    //     },
    //   );
    // }
  }

  signIn(payload: ISignInParams) {
    return this._authApi.signIn(payload).pipe(
      tap((token) => {
        this._updateUser(token);
        this._router.navigateByUrl('');
      }),
    );
  }

  signOut() {
    this._updateUser(null);
    this._router.navigateByUrl('/auth');
  }

  refresh(payload: Pick<IToken, 'refreshToken'>): Observable<IToken> {
    return this._authApi.refresh(payload).pipe(
      tap((token) => {
        this._updateUser(token);
      }),
    );
  }

  private _updateUser(token: IToken | null) {
    if (!token) {
      this._isAuthorized$.next(false);
      this._user = null;
      return;
    }

    this._isAuthorized$.next(!isTokenExpired(token));
    // todo move to constant
    this._localStorage.setItem('accessToken', JSON.stringify(token));
    this._user = token.user;
  }
}
