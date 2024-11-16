import { Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

export const routes: Routes = [
  {
    path: 'interpolation',
    component: InterpolationComponent,
  },
  {
    path: 'class-style-binding',
    component: ClassStyleBindingComponent,
  },
  {
    path: 'prop-binding',
    component: PropBindingComponent,
  },
  {
    path: 'event-binding',
    component: EventBindingComponent,
  },
];
