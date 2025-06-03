import { Component, inject, Input } from '@angular/core';
import { Product } from '../model/product.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ProductsService } from '../service/products.service';
import { ProductListComponent } from "../product-list/ui/product-list.component";
import { BreadcrumbComponent } from "../../../../components/breadcrumb/ui/breadcrumb.component";

@Component({
  selector: 'app-product-card',
  imports: [
    MatCardModule,
    CommonModule,
    MatChipsModule,
    ProductListComponent,
    BreadcrumbComponent
],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  productService = inject(ProductsService);
  dataSource = this.productService.list()

}
