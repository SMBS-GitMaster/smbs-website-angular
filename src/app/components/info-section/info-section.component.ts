import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
import { MarqueeComponent } from '@components/marquee/marquee.component';
import { ImageSlides } from '@interfaces/ImageSlides';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule, MarqueeComponent],
  templateUrl: './info-section.component.html',
  styleUrl: './info-section.component.scss',
})
export default class InfoSectionComponent {
  @Input() customClass = '';
  @Input() title = '';
  @Input() images: ImageSlides[] = [];
  @Input({ transform: booleanAttribute }) isMarquee = false;

  @Input() listStyles = '';
}
