import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../../public/product-card/service/products.service';
import { Product } from '../../../../public/product-card/model/product.model';

@Component({
  selector: 'app-admin-product',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.scss'
})
export class AdminProductComponent {
ok() {
  this.onOk.emit(this.data)
}
  selectedValue: any;
  categorys = inject(ProductsService).getCategory();
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter<Product>();
  data: Product = { id: 6, category: 'cncrouter', image: "", price: 0, title: '', }
}
