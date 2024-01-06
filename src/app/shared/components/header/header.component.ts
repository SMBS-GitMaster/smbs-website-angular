import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Button from '@shared/components/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, Button],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class Header {}
