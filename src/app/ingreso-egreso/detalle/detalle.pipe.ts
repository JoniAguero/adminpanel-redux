import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detalle'
})
export class DetallePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
