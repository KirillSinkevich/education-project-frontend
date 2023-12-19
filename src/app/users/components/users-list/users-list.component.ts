import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import {TuiScrollbarModule} from "@taiga-ui/core";
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    TuiTableModule,
    TuiScrollbarModule,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
  ],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  columns = ['user'];
  data = [
    {
      name: 'name 1'
    },{
      name: 'name 2'
    },{
      name: 'name 2'
    },{
      name: 'name 3'
    },{
      name: 'name 4'
    },{
      name: 'name 5'
    },{
      name: 'name 6'
    },{
      name: 'name 7'
    },{
      name: 'name 8'
    },{
      name: 'name 9'
    },{
      name: 'name 10'
    },{
      name: 'name 11'
    },{
      name: 'name 12'
    },{
      name: 'name 13'
    },{
      name: 'name 14'
    },
  ];
}
