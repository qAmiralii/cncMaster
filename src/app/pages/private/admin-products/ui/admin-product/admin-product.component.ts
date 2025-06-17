import { Component, inject } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { ProductsService } from '../../../../public/product-card/service/products.service';

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
selectedValue: any;
categorys = inject(ProductsService).getCategory();

}
