import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotificationIconPopupComponent} from "../notification-icon-popup/notification-icon-popup.component";
import {TuiAvatarModule} from "@taiga-ui/kit";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NotificationIconPopupComponent, TuiAvatarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
