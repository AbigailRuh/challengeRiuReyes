import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselInfo } from './carousel-info';

describe('CarouselInfo', () => {
  let component: CarouselInfo;
  let fixture: ComponentFixture<CarouselInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
