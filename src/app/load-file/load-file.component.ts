import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileData } from './models/file-data.interface';
import { LoadFileService } from './load-file.service';

@Component({
  selector: 'app-load-file',
  templateUrl: './load-file.component.html',
  styleUrls: ['./load-file.component.css']
})
export class LoadFileComponent implements OnInit {

  public files: FileData[] = [];
  public content: string;
  public allContent: string;
  downloadFile: File;

  @ViewChild('loadFile') private loadFileElement: ElementRef;

  constructor(private _service: LoadFileService) {

  }

  ngOnInit() {

  }

  loadContent() {
    this.content = window.localStorage.getItem('content');
    this.allContent = window.localStorage.getItem('content');
  }

  getFiles() {
    const results = this.allContent;
    results.replace(' ', '');
    console.log('result', results);
  }

  changeFile(event: any) {
    const file: FileData = { file: event.target.files[0], data: '' };
    if (file) {
      this._service.readFile(file).then((result: FileData) => {
        console.log('result', result);
        this.addFile(result);
        this._service.resetFileInput(this.loadFileElement);
      });
    }
  }

  addFile(file: FileData) {
    this.files.push(file);
    console.log('file.data', file.data);
    const data = file.data.split(',')[1];
    const type = file.data.split(',')[0];
    console.log('data', data);
    console.log('type', type);
    this.downloadFile = new File([data], file.file.name, { type: type });
  }

}
