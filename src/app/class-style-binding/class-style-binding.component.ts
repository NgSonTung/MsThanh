import {Component} from "@angular/core";
import {NgClass, NgStyle} from "@angular/common";


@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  styleUrls: ['./class-style-binding.component.scss']
})
export class ClassStyleBindingComponent {
  isActive = false;  // Controls the 'active' class
  bgColor = '#717379FF'; // Controls the background color style
  fontSize = 18;    // Controls the font size style
  isHighlighted = false; // Controls the 'highlighted' class
  isVisible = true; // Controls the 'hidden' class
  toggleActive() {
    this.isActive = !this.isActive;
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  changeStyles() {
    this.bgColor = this.bgColor === "#717379FF" ? 'orange' : '#717379FF';
    this.fontSize = this.fontSize === 18 ? 24 : 18;
  }
}
