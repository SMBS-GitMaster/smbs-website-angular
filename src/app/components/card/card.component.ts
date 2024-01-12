import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getIconName } from '@utils/common-functions';
import Button from '@shared/components/button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  @Input() title = '';
  @Input() description = '';
  @Input() img = '';
  @Input() btnLabel = '';
  @Input() btnClasses = '';
  @Input() customClass = '';

  public get iconName(): string {
    return getIconName(this.img);
  }
}
