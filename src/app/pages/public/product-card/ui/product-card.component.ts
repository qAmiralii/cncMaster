import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ProductsService } from '../service/products.service';
import { ProductListComponent } from "../product-list/ui/product-list.component";
import { BreadcrumbComponent } from "../../../../components/breadcrumb/ui/breadcrumb.component";
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Product } from '../model/product.model';
@Component({
  selector: 'app-product-card',
  imports: [
    MatCardModule,
    CommonModule,
    MatChipsModule,
    ProductListComponent,
    BreadcrumbComponent,
    MatButton,
    MatIcon
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  goWall() {
    this.productService.cat = "wallPanel"
    this.data = this.dataSource.filter(x => x.category == this.productService.cat);
  }
  
  productService = inject(ProductsService);
  dataSource = this.productService.list();
  data: Product[] = this.dataSource;
}
