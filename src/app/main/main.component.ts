import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {RouterOutlet} from "@angular/router";
import {SideMenuComponent} from "./components/side-menu/side-menu.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, SideMenuComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MainComponent {}
