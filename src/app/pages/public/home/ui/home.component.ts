import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SliderComponent } from "../../../../components/slider/slider.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    SliderComponent,
    MatSnackBarModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  counter = 24;
  disable = false;
  plus() {
    this.counter = (this.counter + 1)
    this.disable = true
  }



  durationInSeconds = 5;
  private _snackBar = inject(MatSnackBar);

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }


}
@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="example-pizza-party"> Many thanks! 😍</span>`,
  styles: `
    .example-pizza-party {
      color: green;
    }
  `,
})
export class PizzaPartyComponent { }