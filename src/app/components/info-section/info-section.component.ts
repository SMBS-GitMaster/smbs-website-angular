import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
}
