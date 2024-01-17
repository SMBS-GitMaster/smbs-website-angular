import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import CardDev from '@components/card-dev/card-dev.component';
import Hero from '@components/hero/hero.component';
import { hero } from '@shared/data/constants/homePage';

@Component({
  standalone: true,
  imports: [RouterModule, Hero, CardDev],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomePage {
  public HomeHero = hero;
}
