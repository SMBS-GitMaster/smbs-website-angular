import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import CardDev from '@components/card-dev/card-dev.component';
import Hero from '@components/hero/hero.component';
import InfoSectionComponent from '@components/info-section/info-section.component';
import { hero, clientList } from '@shared/data/constants/homePage';

@Component({
  standalone: true,
  imports: [RouterModule, Hero, CardDev, InfoSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomePage {
  public HomeHero = hero;

  public clientListImages = clientList;
  public clientListStyles =
    'flex items-center justify-center gap-x-[45px] gap-y-10 flex-wrap lg:flex-nowrap lg:justify-between';
}
