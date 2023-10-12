import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Car[], textFilter:string): Car[] {

   textFilter=textFilter? textFilter.toLocaleUpperCase():""

      return textFilter
      ? value.filter(
          (c: Car) =>
            c.model.name.toLocaleUpperCase().indexOf(textFilter) !== -1
        )
      : value;
  }
}
