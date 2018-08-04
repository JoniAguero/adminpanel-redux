import { Pipe, PipeTransform } from '@angular/core';
import { IngresoEgreso } from '../../models/IngresoEgreso.model';

@Pipe({
  name: 'detalle'
})
export class DetallePipe implements PipeTransform {

  transform(items: IngresoEgreso[]): IngresoEgreso[] {
    return items.sort( (a, b)  => {
      if ( a.date > b.date ) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
