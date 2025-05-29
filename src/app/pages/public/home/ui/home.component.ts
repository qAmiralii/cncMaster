import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SliderComponent } from "../../../../components/slider/slider.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    SliderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  counter = 24;
  plus() {
    this.counter = (this.counter + 1)
  }
}
