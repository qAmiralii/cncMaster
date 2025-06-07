import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { NewsItem, NewsService } from './news.service';

@Component({
  selector: 'app-testt',
  imports: [
    MatCard,

  ],
  templateUrl: './testt.component.html',
  styleUrl: './testt.component.scss'
})
export class TesttComponent {
  private newsService = inject(NewsService);
  news: NewsItem[] = [];

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => this.news = data);
  }
}
