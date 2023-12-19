import {inject, InjectionToken} from "@angular/core";
import {WINDOW} from "./window";

export const LOCAL_STORAGE = new InjectionToken(
  'browser storage',
  {
    providedIn: 'root',
    factory: (): Storage => inject(WINDOW).localStorage,
  });