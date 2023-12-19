import {Provider} from "@angular/core";
import {AuthTokenInterceptor} from "./auth-token.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

const diInterceptors: Provider[] = [
  AuthTokenInterceptor,
];

export const DI_INTERCEPTORS = diInterceptors.map(provider => ({
  useClass: provider,
  provide: HTTP_INTERCEPTORS,
  multi: true,
}));

