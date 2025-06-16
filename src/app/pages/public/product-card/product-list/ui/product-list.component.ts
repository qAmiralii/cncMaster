import { Component, inject, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  imports: [
    MatCardModule,
    CommonModule,
    MatChipsModule,
    MatButton,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() product!: Product;

}
