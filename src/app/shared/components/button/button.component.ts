import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button.component.html',
})
export default class Button {
  @Input() customClass = '';
  @Output() onClick = new EventEmitter<MouseEvent>();

  onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }
}
