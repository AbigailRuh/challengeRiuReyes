import { Component } from '@angular/core';
import { Featured } from '../../components/featured/featured';
import { News } from '../../components/news/news';
import { CarouselInfo } from '../../components/carousel-info/carousel-info';
import { CarouselItemModel } from '../../models/carousel-item.model';

@Component({
  selector: 'app-home-page',
  imports: [Featured, News, CarouselInfo],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  readonly carouselTitle = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.';  
  readonly carouselDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.';

  readonly carouselItems: CarouselItemModel[] = [
    {
      id: 'item-1',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageUrl: 'https://placehold.co/400x500/e5e5e5/a3a3a3?text=IMAGE',
      imageAlt: 'Imagen 1',
      downloadUrl: '#',
      downloadLabel: 'Lorem ipsum',
    },
    {
      id: 'item-2',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageUrl: 'https://placehold.co/400x500/e5e5e5/a3a3a3?text=IMAGE',
      imageAlt: 'Imagen 2',
      downloadUrl: '#',
      downloadLabel: 'Lorem ipsum',
    },
    {
      id: 'item-3',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageUrl: 'https://placehold.co/400x500/e5e5e5/a3a3a3?text=IMAGE',
      imageAlt: 'Imagen 3',
      downloadUrl: '#',
      downloadLabel: 'Lorem ipsum',
    },
    {
      id: 'item-4',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      imageUrl: 'https://placehold.co/400x500/e5e5e5/a3a3a3?text=IMAGE',
      imageAlt: 'Imagen 4',
      downloadUrl: '#',
      downloadLabel: 'Lorem ipsum',
    }
  ];

}
