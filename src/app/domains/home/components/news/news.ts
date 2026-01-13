import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewItem } from '../new-item/new-item';
import { NewsService } from '../../services/news.service';
import { NewsItemModel } from '../../models/news.model';

@Component({
  selector: 'app-news',
  imports: [NewItem],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News {
  private readonly newsService = inject(NewsService);

  readonly newsItems = toSignal(this.newsService.getNews(), {
    initialValue: [] as NewsItemModel[]
  });
}
