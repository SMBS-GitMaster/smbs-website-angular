import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import Button from '../../shared/components/button/button.component';

@Component({
  selector: 'app-card-dev',
  standalone: true,
  imports: [RouterModule, Button],
  templateUrl: './card-dev.component.html',
  styleUrls: ['./card-dev.component.scss'],
})
export default class CardDev {
  @Input() name = '';
  @Input() avatar = '';
  @Input() proffesion = '';
  @Input() description = '';
  @Input() skills: string[] = [];

  techSkills(skills: string[]): string {
    return skills.join(', ');
  }
}
