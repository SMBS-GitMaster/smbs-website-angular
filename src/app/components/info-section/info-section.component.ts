import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
import { ImageSlides } from '@interfaces/ImageSlides';
// import { NgxMarqueeComponent, NgxMarqueeModule } from 'ngx-marquee';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule],
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
