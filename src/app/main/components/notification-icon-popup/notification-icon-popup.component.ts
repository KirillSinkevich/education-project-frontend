import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-icon-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-icon-popup.component.html',
  styleUrls: ['./notification-icon-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationIconPopupComponent {

}
