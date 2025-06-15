import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

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


      s = [
        { title: 'Admin Dasshboard', cols: 4, rows: 2 },
        { title: 'side menu', cols: 3, rows: 8 },
        { title: '', cols: 1, rows: 8 },
      ]


  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    isvalid : boolean = false
    isva = this.isHandset$.subscribe( x => {
      if (x==true) {
        this.isvalid = true
      }
      else{
        this.isvalid = false
      }
    }
    )
}