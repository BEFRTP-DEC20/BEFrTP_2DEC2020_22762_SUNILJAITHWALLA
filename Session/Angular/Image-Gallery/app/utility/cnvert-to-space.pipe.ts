import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnvertToSpace'
})
export class CnvertToSpacePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    return  value.replace(' ', args[0]);
  }

}
