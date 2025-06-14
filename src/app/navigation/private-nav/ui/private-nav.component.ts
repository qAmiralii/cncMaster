import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-nav',
  templateUrl: './private-nav.component.html',
  styleUrl: './private-nav.component.scss',
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    RouterLink,
    RouterOutlet,
  ]
})
export class PrivateNavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );










 stats: { title: string; value: string | number }[] = [];
  cncNews: { title: string }[] = [];

  ngOnInit(): void {
    this.loadMockData();
  }

  loadMockData(): void {
    this.stats = [
      { title: 'تعداد کاربران', value: 1200 },
      { title: 'فروش امروز (BTC)', value: '₿0.24' },
      { title: 'قالب‌های فعال', value: 87 },
      { title: 'سفارشات اخیر', value: 14 },
    ];

    this.cncNews = [
      { title: 'آپدیت جدید دستگاه CNC مدل Z3 منتشر شد' },
      { title: 'روش‌های کاهش لرزش در CNC پیشرفته' },
      { title: '5 نکته حرفه‌ای در استفاده از دستگاه‌های برش' },
    ];
  }








}


