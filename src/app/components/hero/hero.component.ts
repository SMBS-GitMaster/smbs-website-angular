import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import CardDev from '@components/card-dev/card-dev.component';
import Button from '@shared/components/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, Button, CardDev],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export default class Hero {}
