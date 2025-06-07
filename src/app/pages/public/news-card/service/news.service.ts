import { Injectable } from '@angular/core';
import { newsModel } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  cat: string = 'all'

  private newsData: newsModel[] = [
    {
      title: 'New CNC Machine Launched',
      summary: 'A powerful and precise CNC machine has hit the market.',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      date: '2025-06-01',
      category: 'Technology'
    },
    {
      title: '5 Tips for CNC Maintenance',
      summary: 'Keep your CNC running like new with these expert tips.',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      date: '2025-06-02',
      category: 'Maintenance'
    },
    {
      title: 'CNC Training Opportunities',
      summary: 'Boost your skills with new CNC training programs.',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      date: '2025-06-03',
      category: 'Education'
    },
    {
      title: 'New CNC Maintenance',
      summary: 'Keep your CNC running like the bigest new wood cnc machine',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      date: 'April 2025-06-02',
      category: 'Maintenance'
    }
  ]
  getData() {
    return this.newsData;
  }

}
