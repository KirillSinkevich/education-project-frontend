import {IEnvironment} from "../../models/interfaces";
import {InjectionToken} from "@angular/core";
import {environment} from "../../../../environments/environment.dev";

export const ENVIRONMENT = new InjectionToken<IEnvironment>(
  'an abstraction over environment configuration',
  {
    providedIn: 'root',
    factory: (): IEnvironment => environment,
  },
);
