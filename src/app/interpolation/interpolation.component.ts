import { Component } from '@angular/core';
import { CurrentTimePipe } from './current-time.pipe';

@Component({
  selector: 'interpolation',
  imports: [CurrentTimePipe],
  standalone: true,
  templateUrl: './interpolation.component.html',
})
export class InterpolationComponent {
  interactionCount = 0;
  randomNumber = 0;

  getCurrentTime(): string {
    console.log('Recalculating current time...');
    return new Date().toLocaleTimeString();
  }

  triggerChange(): void {
    console.log('Button clicked');
  }

  onRandom() {
    this.randomNumber = Math.random();
    console.log('random', this.randomNumber);
  }

  onNotRandom() {
    console.log('not random');
  }
}
