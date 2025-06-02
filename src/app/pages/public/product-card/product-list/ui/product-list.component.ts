import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../model/product.model';
import { ProductCardComponent } from "../../ui/product-card.component";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCardComponent,
    MatCardModule,
    CommonModule,
    MatChipsModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() product!: Product;

}
