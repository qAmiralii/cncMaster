import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { ProductsService } from '../../../pages/public/product-card/service/products.service';
import { FooterComponent } from "../../../components/footer/ui/footer.component";


@Component({
  selector: 'app-public-nav',
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    AsyncPipe,
    FooterComponent
],
  templateUrl: './public-nav.component.html',
  styleUrl: './public-nav.component.scss'
})
export class PublicNavComponent {
  refreshService = inject(ProductsService)
  refresh() {
    this.refreshService.cat = "all"
  }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  showMobileMenu = false;
  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}

