import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IEnvironment, ISignInParams, IToken} from "../models/interfaces";
import {Observable} from "rxjs";
import {ENVIRONMENT} from "../utils";

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  constructor(
    private _http: HttpClient,
    // private _environment: IEnvironment,
    @Inject(ENVIRONMENT) private readonly _environment: IEnvironment,
  ) {}

  signIn(payload: ISignInParams): Observable<IToken> {
    return this._http.post<IToken>(`${this._environment.baseUrl}/login`, payload);
  }
  
  refresh(payload: Pick<IToken, 'refreshToken'>): Observable<IToken> {
    return this._http.post<IToken>(`${this._environment.baseUrl}/refresh`, { payload });
  }
}
