import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase',
})
export class UppercasePipe implements PipeTransform {
  transform(word: string, upperCase: boolean = true): string {
    // if (upperCase) {
    //   return word.toUpperCase();
    // } else {
    //   return word.toLowerCase();
    // }

    return upperCase ? word.toUpperCase() : word.toLowerCase();
  }
}
