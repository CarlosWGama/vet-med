import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBrasil',
})
export class DataBrasilPipe implements PipeTransform {

  transform(value: string, ...args) {
    let data = value.split("-");
    return data[2]+"/"+data[1]+"/"+data[0];
  }
}
