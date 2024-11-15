import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss',
})
export class EventBindingComponent {
  message: string = 'Click the button to see the magic!';
  text = '';
  text2 = '';
  onButtonClick() {
    this.message = 'Button Clicked! Event binding works 🎉';
  }

  onKeyUp(x: Event) {
    this.text += (x.target as HTMLInputElement).value + ' | ';
  }

  onShiftDown(x: Event) {
    this.text2 = 'SHIFT PRESSED';
  }
  onShiftUp(x: Event) {
    this.text2 = '';
  }
  onKeysDown(x: Event) {
    this.text2 = 'ALT + T PRESSED';
  }
  onKeysUp(x: Event) {
    this.text2 = '';
  }
}
