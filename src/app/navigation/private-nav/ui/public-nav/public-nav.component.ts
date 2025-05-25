import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-public-nav',
  imports: [
    MatCardModule,

  ],
  templateUrl: './public-nav.component.html',
  styleUrl: './public-nav.component.scss'
})
export class PublicNavComponent {

}
