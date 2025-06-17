import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../public/product-card/service/products.service';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../public/product-card/model/product.model';
import { AdminProductComponent } from "./admin-product/admin-product.component";


@Component({
  selector: 'app-admin-products',
  imports: [
    MatCardModule,
    AdminProductComponent
],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss'
})
export class AdminProductsComponent {
  edit(product: Product) {
    console.log(product)
  }
  remove(product: Product) {
    console.log(product)
  }
  Source = inject(ProductsService)
  dataSource = this.Source.getlist()
}
