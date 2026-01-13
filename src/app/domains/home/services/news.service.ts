import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItemModel } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly http = inject(HttpClient);
  private readonly NEWS_DATA_URL = '/data/news.json';

  getNews(): Observable<NewsItemModel[]> {
    return this.http.get<NewsItemModel[]>(this.NEWS_DATA_URL);
  }
}
