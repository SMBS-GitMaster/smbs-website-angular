import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Button from '../button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, Button],
  templateUrl: './navbar.component.html',
})
export default class Navbar {}
