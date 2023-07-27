import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToFormattedDate',
})
export class StringToFormattedDatePipe implements PipeTransform {
  transform(value: string): string {
    let theDate = new Date(value);
    return theDate.toDateString();
  }
}
