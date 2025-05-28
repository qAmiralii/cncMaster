import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-nav',
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet

  ],
  templateUrl: './public-nav.component.html',
  styleUrl: './public-nav.component.scss'
})
export class PublicNavComponent {

}
