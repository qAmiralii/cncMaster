import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { NewsService } from '../service/news.service';
import { newsModel } from '../model/news.model';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-news-card',
  imports: [
    MatCardModule,
    MatIcon,
    MatButton,
    MatChipsModule,
  ],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  data: newsModel[] = inject(NewsService).getData();

}
