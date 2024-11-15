import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prop-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prop-binding.component.html',
  styleUrl: './prop-binding.component.scss',
})
export class PropBindingComponent {
  imageSrc: string = 'https://via.placeholder.com/150';
  imageAlt: string = 'Placeholder Image';
  btnDisabled: boolean = false;

  changeImage() {
    console.log('CLICKED');
    this.imageSrc = 'https://via.placeholder.com/300';
    this.imageAlt = 'New Placeholder Image';
  }

  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
  };

  toggleBtn = () => {
    this.btnDisabled = !this.btnDisabled;
  };

  showAlert = () => {
    alert('Button Clicked');
  };
}
