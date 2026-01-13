import { Component, input } from '@angular/core';
import { NewsItemModel } from '../../models/news.model';

@Component({
  selector: 'app-new-item',
  imports: [],
  templateUrl: './new-item.html',
  styleUrl: './new-item.scss',
})
export class NewItem {
  readonly item = input.required<NewsItemModel>();
}
