import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  booleanAttribute,
  signal,
} from '@angular/core';
import { ReviewCard } from '@components/review-card/review-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, ReviewCard],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Carousel {
  @Input({ transform: booleanAttribute }) forReviewsList = false;
  @Input() cards: any[] = [];
  @Input({ required: true }) owlOptions!: OwlOptions;

  public customOptions = signal<OwlOptions>({
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
  });

  ngOnInit() {
    this.customOptions.update((values) => ({ ...values, ...this.owlOptions }));
  }
}
