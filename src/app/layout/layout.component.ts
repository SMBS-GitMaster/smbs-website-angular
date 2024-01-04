import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Navbar from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, Navbar],
  templateUrl: './layout.component.html',
})
export default class Layout {}
