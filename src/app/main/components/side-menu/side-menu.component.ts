import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiSvgModule } from '@taiga-ui/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, TuiSvgModule, RouterLink],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {}
