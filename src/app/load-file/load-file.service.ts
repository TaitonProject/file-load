import { Injectable, ElementRef } from '@angular/core';
import { FileData } from './models/file-data.interface';

@Injectable({
  providedIn: 'root'
})
export class LoadFileService {

  constructor() { }

  public readFile(file: FileData) {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = (event) => {
        file.data = new Blob([event.target['result']]);
        resolve(file);
      };

      reader.onerror = () => {
        return reject(this);
      };

      if (/^image/.test(file.type)) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsText(file);
      }

    });
  }

  public resetFileInput(input: ElementRef) {
    input.nativeElement.value = '';
    input.nativeElement.type = '';
    input.nativeElement.type = 'file';
  }

  public fileToTag(file: FileData): string {
    return '<file name=\"' + file.name + '\" style=\'display:none\'>' + file.data + '</file>';
  }
}
