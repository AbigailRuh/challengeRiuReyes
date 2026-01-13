import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CarouselItem } from '../carousel-item/carousel-item';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselItemModel } from '../../models/carousel-item.model';

@Component({
  selector: 'app-carousel-info',
  imports: [CarouselItem, CarouselModule],
  templateUrl: './carousel-info.html',
  styleUrl: './carousel-info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselInfo {
  readonly title = input<string>('');
  readonly description = input<string>('');
  readonly items = input<CarouselItemModel[]>([]);

  readonly carouselOptions: OwlOptions = {
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  nav: false,
  navText: ['', ''],
  stagePadding: 0,
  margin: 32,
  responsive: {
    0: { items: 1.4},
    640: { items: 1.8},
    860: { items: 3.15},
    1280: { items: 4},
  },
};
}
