import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFile'
})
export class FilerFilePipe implements PipeTransform {

  transform(file: File, args?: any): any {
    if (file) {
      console.log('URL.createObjectURL(file)', window.URL.createObjectURL(file));
      return window.URL.createObjectURL(file);
    }
  }

}
