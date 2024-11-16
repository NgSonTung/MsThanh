import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ClassStyleBindingComponent,
    EventBindingComponent,
    PropBindingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MsThanh';
}
