import { Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import {ClassStyleBindingComponent} from "./class-style-binding/class-style-binding.component";

export const routes: Routes = [
  {
    path: 'interpolation',
    component: InterpolationComponent,
  },
  {
    path:'class-style-binding',
    component: ClassStyleBindingComponent
  }
];
