import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SliderComponent } from "../../../../components/slider/ui/slider.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { IshandedComponent } from "../../../../components/test/ui/ishanded/ishanded.component";



@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    SliderComponent,
    MatSnackBarModule,
    IshandedComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      duration: this.durationInSeconds * 800,
    });
  }


}
@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="example-pizza-party"> Many thanks! 😍</span>`,
  styleUrl: './home.component.scss'

})
export class PizzaPartyComponent { }