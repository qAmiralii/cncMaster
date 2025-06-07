import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NewsItem {
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class NewsService {
  getNews(): Observable<NewsItem[]> {
    return of([
      {
        title: 'New CNC Machine Launched',
        summary: 'A powerful and precise CNC machine has hit the market.',
        image: 'assets/news1.jpg',
        date: '2025-06-01',
        category: 'Technology'
      },
      {
        title: '5 Tips for CNC Maintenance',
        summary: 'Keep your CNC running like new with these expert tips.',
        image: 'assets/news2.jpg',
        date: '2025-06-02',
        category: 'Maintenance'
      },
      {
        title: 'CNC Training Opportunities',
        summary: 'Boost your skills with new CNC training programs.',
        image: 'assets/news3.jpg',
        date: '2025-06-03',
        category: 'Education'
      }
    ]);
  }
}
