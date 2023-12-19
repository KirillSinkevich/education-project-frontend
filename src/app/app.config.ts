import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TUI_SANITIZER, TuiRootModule } from '@taiga-ui/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app-router';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { DI_INTERCEPTORS } from './core/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(TuiRootModule, BrowserAnimationsModule),
    // provideHttpClient(withInterceptors(INTERCEPTORS), withInterceptorsFromDi()),
    provideHttpClient(withInterceptorsFromDi()),
    DI_INTERCEPTORS,
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
  ],
};
