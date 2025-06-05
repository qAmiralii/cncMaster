import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { ProductsService } from '../../../pages/public/product-card/service/products.service';


@Component({
  selector: 'app-breadcrumb',
  imports: [
    MatCard,
    MatIcon,
    AsyncPipe
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  catRout = inject(ProductsService);
  path = [
  { icon: 'home', label: 'Home' },
  { icon: 'category', label: 'Products' },
  { icon: 'memory', label: this.catRout.cat }
];


  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches), shareReplay());

}
