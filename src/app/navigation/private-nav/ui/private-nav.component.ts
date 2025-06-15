import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  
  private mobileMode = inject(BreakpointObserver);
  cards = this.mobileMode.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Admin Dasshboard', cols: 1, rows: 1 },
          { title: 'Side menu', cols: 1, rows: 1 },
          { title: '', cols: 1, rows: 1 },
        ]
      }
      
      return [
        { title: 'Admin Dasshboard', cols: 4, rows: 2 },
        { title: 'side menu', cols: 3, rows: 8 },
        { title: '', cols: 1, rows: 8 },
      ]
    })
  )
  
  
  
}