import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { getIconName } from '@utils/common-functions';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
})
export class ReviewCard {
  @Input() logo = '';
  @Input() customClass = '';
  @Input() description = '';
  @Input() reviewer = '';
  @Input() reviewerTitle = '';
  @Input() reviewerLogo = '';
  // @Input() rating = '';

  public get iconName(): string {
    return getIconName(this.logo);
  }
}
