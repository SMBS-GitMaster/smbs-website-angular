import { Component } from '@angular/core';
import { HeroPage } from '@interfaces/HeroPage';
import { RouterModule } from '@angular/router';
import CardDev from '@components/card-dev/card-dev.component';
import Hero from '@components/hero/hero.component';

@Component({
  standalone: true,
  imports: [RouterModule, Hero, CardDev],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomePage {
  hero: HeroPage = {
    title: 'Boost your Software team with LATAM talent.',
    subtitle: 'Staff augmentation made easy.',
    description: `Whether you need one developer or an entire team, we have the
          expertise to find the right fit for your project. Plus, with our
          flexible engagement models, you can choose the level of support that
          works best for your needs.`,
  };
}
