import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentTime',
  standalone: true,
})
export class CurrentTimePipe implements PipeTransform {
  transform(value: any): string {
    console.log('Pipe transform called...');
    return new Date().toLocaleTimeString();
  }
}
