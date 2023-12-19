import {NotificationType} from "./notification.type";

export interface INotificationToken {
  open(content: string, type: NotificationType, autoClose: boolean): void;
}
