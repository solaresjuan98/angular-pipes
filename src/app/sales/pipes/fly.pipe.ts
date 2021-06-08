import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyPipe',
})
export class FlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'fly' : 'does not fly';
  }
}

