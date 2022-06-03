import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateTimePipe'
})
export class DateTimePipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value) {
      return moment(value).format('MM/DD/YYYY hh:mm A');
    }
    return null;
  }

}
