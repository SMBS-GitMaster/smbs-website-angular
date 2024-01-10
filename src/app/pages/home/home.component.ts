import { Component } from '@angular/core';
import { HeroPage } from '@interfaces/HeroPage';
import { RouterModule } from '@angular/router';
import CardDev from '@components/card-dev/card-dev.component';
import Hero from '@components/hero/hero.component';
import InfoSectionComponent from '@components/info-section/info-section.component';
import { Card } from '@components/card/card.component';

@Component({
  standalone: true,
  imports: [RouterModule, Hero, CardDev, InfoSectionComponent, Card],
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

  images = [
    {
      name: 'C#',
      src: 'assets/images/c_sharp.png',
    },
    {
      name: 'Docker',
      src: 'assets/images/docker.png',
    },
    {
      name: 'JavaScript',
      src: 'assets/images/js.png',
    },
    {
      name: 'Java',
      src: 'assets/images/java.png',
    },
    {
      name: 'Angular',
      src: 'assets/images/angular.png',
    },
    {
      name: 'PHP',
      src: 'assets/images/php.png',
    },
    {
      name: 'Python',
      src: 'assets/images/python.png',
    },
    {
      name: 'ReactJS',
      src: 'assets/images/reactjs.png',
    },
    {
      name: 'Node',
      src: 'assets/images/nodejs.png',
    },
  ];
}
