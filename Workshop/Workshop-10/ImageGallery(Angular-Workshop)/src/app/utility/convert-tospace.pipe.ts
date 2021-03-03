import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTospace'
})
export class ConvertTospacePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    return value.replace(' ' , '+');
    return value.replace(' ',args[0]);
   
  }
  

}
