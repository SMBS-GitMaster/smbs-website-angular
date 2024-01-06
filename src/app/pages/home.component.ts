import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Hero from '@components/hero/hero.component';

@Component({
  standalone: true,
  imports: [RouterModule, Hero],
  templateUrl: './home.component.html',
})
export default class HomePage {}
