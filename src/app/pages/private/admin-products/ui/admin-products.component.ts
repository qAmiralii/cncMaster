import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../public/product-card/service/products.service';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-admin-products',
  imports: [
    MatCardModule,
  ],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss'
})
export class AdminProductsComponent {
  Source = inject(ProductsService)
  dataSource = this.Source.getlist()
}
