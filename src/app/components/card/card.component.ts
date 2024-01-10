import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input() img = '';
  @Input() btnLabel = '';
  @Input() btnClasses = '';
  @Input() customClass = '';
}
