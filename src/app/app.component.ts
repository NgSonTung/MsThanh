import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ClassStyleBinding} from "./components/class-style-binding-ex/class-style-binding";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClassStyleBinding],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MsThanh';
}
