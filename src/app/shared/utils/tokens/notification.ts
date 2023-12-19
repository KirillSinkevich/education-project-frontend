import {Inject, InjectionToken} from "@angular/core";
import {INotificationToken, NotificationType} from "../../models/interfaces";
import {NotificationService} from "../../../core/services";

export const NOTIFICATION = new InjectionToken<INotificationToken>(
  'abstraction over notification',
  {
    providedIn: 'root',
    factory: (): INotificationToken => {
      const notification = Inject(NotificationService);

      return {
        open(content: string, type: NotificationType, autoClose: boolean): void {
          notification.open(content, type, autoClose);
        },
      };
    },
  },
);
