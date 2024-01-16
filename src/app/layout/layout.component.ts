import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Header from '@shared/components/header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, Header],
  templateUrl: './layout.component.html',
})
export default class Layout {}
