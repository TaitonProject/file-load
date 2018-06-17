import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFile'
})
export class FilerFilePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const fileRegExp = new RegExp(/<file.*<\/file>/s);
    return value.replace(fileRegExp, '');
  }

}
