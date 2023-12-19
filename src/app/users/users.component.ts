import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from "./components/filter/filter.component";
import {UsersListComponent} from "./components/users-list/users-list.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FilterComponent, UsersListComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {}
