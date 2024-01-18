import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageSlides } from '@models/types';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueeComponent {
  @Input() images: ImageSlides[] = [];
}
