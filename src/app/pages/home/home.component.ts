import { Card } from '@components/card/card.component';
import { Component } from '@angular/core';
import { getIconName } from '@utils/common-functions';
import { HeroPage } from '@interfaces/HeroPage';
import { ImageSlides } from '@interfaces/ImageSlides';
import { RouterModule } from '@angular/router';
import CardDev from '@components/card-dev/card-dev.component';
import Hero from '@components/hero/hero.component';
import InfoSectionComponent from '@components/info-section/info-section.component';
import { ReviewCard } from '@components/review-card/review-card.component';
import { Carousel } from '@components/carousel/carousel.component';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  standalone: true,
  imports: [
    Card,
    CardDev,
    Hero,
    InfoSectionComponent,
    ReviewCard,
    RouterModule,
    Carousel,
  ],
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

  stackImages: ImageSlides[] = [
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

  clientsImages: ImageSlides[] = [
    {
      name: 'Identty',
      src: 'assets/images/identty.png',
    },
    {
      name: 'baum digital',
      src: 'assets/images/baum.png',
    },
    {
      name: 'Applaudo',
      src: 'assets/images/applaudo.png',
    },
    {
      name: 'Bloom Growth',
      src: 'assets/images/bloom.png',
    },
    {
      name: 'Walmart',
      src: 'assets/images/walmart.png',
    },
  ];

  clientListStyles =
    'flex items-center justify-center gap-x-[45px] gap-y-10 flex-wrap lg:flex-nowrap lg:justify-between';

  ourModelList = [
    {
      icon: 'assets/images/selection.png',
      text: 'Recruiting, screening, and Selection',
    },
    {
      icon: 'assets/images/pay.png',
      text: ' HR and payroll',
    },
    {
      icon: 'assets/images/pay.png',
      text: 'HR and payroll',
    },
    {
      icon: 'assets/images/performance.png',
      text: 'Performance management',
    },
    {
      icon: 'assets/images/training.png',
      text: 'Training and Development',
    },
    {
      icon: 'assets/images/doc.png',
      text: 'Legal Compliance',
    },
    {
      icon: 'assets/images/employees.png',
      text: 'Employee Engagement',
    },
  ];

  skillsetList = [
    {
      icon: 'assets/images/calendar_icon.png',
      text: 'Assess talent suitability within a two-week trial',
    },
    {
      icon: 'assets/images/lock_icon.png',
      text: 'Quickly secure an alternative candidate if the initial choice doesn’t meet your expectations',
    },
    {
      icon: 'assets/images/no_money_icon.png',
      text: 'No Hire, No Payment!',
    },
  ];

  reviewsList = [
    {
      logo: 'assets/images/review_logo.png',
      description:
        '“We found great value in their technical and communication skills.”',
      reviewer: 'Vinicio Barrantes01',
      reviewerTitle: 'Productions Director at Baum Digital',
      reviewerLogo: 'assets/images/reviewer_logo.png',
    },
    {
      logo: 'assets/images/review_logo.png',
      description:
        '“We found great value in their technical and communication skills.”',
      reviewer: 'Vinicio Barrantes02',
      reviewerTitle: 'Productions Director at Baum Digital',
      reviewerLogo: 'assets/images/reviewer_logo.png',
    },
    {
      logo: 'assets/images/review_logo.png',
      description:
        '“We found great value in their technical and communication skills.”',
      reviewer: 'Vinicio Barrantes03',
      reviewerTitle: 'Productions Director at Baum Digital',
      reviewerLogo: 'assets/images/reviewer_logo.png',
    },
    {
      logo: 'assets/images/review_logo.png',
      description:
        '“We found great value in their technical and communication skills.”',
      reviewer: 'Vinicio Barrantes04',
      reviewerTitle: 'Productions Director at Baum Digital',
      reviewerLogo: 'assets/images/reviewer_logo.png',
    },
    {
      logo: 'assets/images/review_logo.png',
      description:
        '“We found great value in their technical and communication skills.”',
      reviewer: 'Vinicio Barrantes05',
      reviewerTitle: 'Productions Director at Baum Digital',
      reviewerLogo: 'assets/images/reviewer_logo.png',
    },
  ];

  public get iconName(): (icon: string) => string {
    return getIconName;
  }

  owlOptions: OwlOptions = {
    startPosition: 1,
    margin: 20,
    center: true,
    responsive: {
      300: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 0,
      },
      1200: {
        items: 3,
      },
    },
  };
}
