import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
        {
      id: 1,
      title: 'CNC Machine X200',
      price: 3200,
      image: '/img/cncrouter/101.png',
      description: 'High precision CNC machine.',
      rating: 4.5,
      tags: ['industrial']
    },
    {
      id: 2,
      title: 'CNC Router Pro',
      price: 1800,
      image: '/img/cncrouter/102.png',
      description: 'Compact router for small-scale work.',
      rating: 4.2,
      tags: ['compact', 'affordable']
    },
    {
      id: 3,
      title: 'Laser CNC Cutter',
      price: 2500,
      image: '/img/wallPanel/wall101.png',
      description: 'Laser precision for detailed cutting.',
      rating: 4.7,
      tags: ['laser', 'precision']
    }





  ]
}
