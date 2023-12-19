import { Inject, Injectable } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import {NotificationType} from "../../shared/models/interfaces";

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(@Inject(TuiAlertService) private readonly _alerts: TuiAlertService) {}

  open(content: string, type: NotificationType = 'info', autoClose = true) {
    return this._alerts.open(content, { status: type, autoClose });
  }
}
