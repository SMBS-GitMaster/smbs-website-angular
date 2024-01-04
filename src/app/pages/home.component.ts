import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Header from '../components/header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, Header],
  templateUrl: './home.component.html',
})
export default class HomePage {}
