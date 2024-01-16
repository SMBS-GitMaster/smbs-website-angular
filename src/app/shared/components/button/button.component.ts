import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export default class Button {
  @Input() customStyles = '';
  @Output() onClick = new EventEmitter<MouseEvent>();

  onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }
}
