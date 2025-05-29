import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SliderComponent } from "../../../../components/slider/slider.component";
@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    SliderComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
