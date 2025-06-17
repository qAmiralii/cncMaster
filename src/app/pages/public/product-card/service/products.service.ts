import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../model/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cat : string = 'all';
  private catData: ProductCategory[] = [
    "cncrouter",
    "laser",
    "wallPanel",
    "wood"
  ]
  private pData: Product[] = [
    {
      id: 1,
      title: 'CNC Machine X200',
      price: 3200,
      image: '/img/cncrouter/101.png',
      category: 'cncrouter',
      description: 'High precision CNC machine.',
      rating: 4.5,
      tags: ['industrial'],
      status: true
    },
    {
      id: 2,
      title: 'CNC Router Pro',
      price: 1800,
      image: '/img/cncrouter/102.png',
      category: 'cncrouter',
      description: 'Compact router for small-scale work.',
      rating: 4.2,
      tags: ['compact', 'affordable'],
      status: true

    },
    {
      id: 3,
      title: 'Laser CNC Cutter',
      price: 2500,
      image: '/img/wallPanel/wall101.png',
      category: 'wallPanel',
      description: 'Laser precision for detailed cutting.',
      rating: 4.7,
      tags: ['laser', 'precision'],
      status: true

    },
    {
      id: 4,
      title: 'Laser CNC Cutter',
      price: 2500,
      image: '/img/wallPanel/wall102.png',
      category: 'wallPanel',
      description: 'Laser precision for detailed cutting.',
      rating: 4.7,
      tags: ['laser', 'precision'],
      status: true

    },
    {
      id: 5,
      title: 'Laser CNC Cutter sp',
      price: 2500,
      image: '/img/wallPanel/wall103.png',
      category: 'wallPanel',
      description: 'Laser precision for detailed cutting.',
      rating: 4.7,
      tags: ['laser', 'precision'],
      status: false
    }
  ];

  getlist(){
    return this.pData;
  }
  getCategory(){
    return this.catData
  }
}
