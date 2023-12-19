import {Inject, Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, switchMap, throwError} from "rxjs";
import {AuthService} from "../../auth/services/auth.service";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  private readonly _authService = Inject(AuthService);
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // debugger
    // if (request.url.includes('api/')) {
    //   return next.handle(request);
    // }
    let newRequest = this._getRequestWithHeader(request);

    return next.handle(newRequest).pipe(
      catchError(error => {
        if ((error as HttpErrorResponse).status === 401) {
          return this._handleRefreshToken(request, next);
        }

        return throwError(error);
      })
    );
  }

  private _getRequestWithHeader(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return request.clone({ withCredentials: true });
  }

  private _handleRefreshToken(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return this._authService.refresh().pipe(
      switchMap(() => next.handle(this._getRequestWithHeader(request))),
      catchError(error => {
        console.log('logout')
        this._authService.signOut();
        return throwError(error);
      })
    )
  }
}