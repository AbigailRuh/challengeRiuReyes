import { Component, input } from '@angular/core';
import { CarouselItemModel } from '../../models/carousel-item.model';

@Component({
  selector: 'app-carousel-item',
  imports: [],
  templateUrl: './carousel-item.html',
  styleUrl: './carousel-item.scss',
})
export class CarouselItem {
  readonly item = input.required<CarouselItemModel>();
}