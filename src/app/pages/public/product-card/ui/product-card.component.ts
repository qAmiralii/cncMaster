import { Component, Input } from '@angular/core';
import { Product } from '../model/product.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-product-card',
  imports: [
    MatCardModule,
    CommonModule,
    MatChipsModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;

}
