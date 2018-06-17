import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterContentInit } from '@angular/core';
import { FileData } from './models/file-data.interface';
import { LoadFileService } from './load-file.service';

@Component({
  selector: 'app-load-file',
  templateUrl: './load-file.component.html',
  styleUrls: ['./load-file.component.css']
})
export class LoadFileComponent implements OnInit, AfterContentInit, OnDestroy {

  public files: FileData[] = [];
  public content: string;
  public allContent: string;

  @ViewChild('loadFile') private loadFileElement: ElementRef;

  constructor(private _service: LoadFileService) {

  }

  ngOnInit() {

  }

  ngAfterContentInit(): void {
    this.loadContent();
    this.getFiles();
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
    const file: FileData = event.target.files[0];
    if (file) {
      this._service.readFile(file).then((result: FileData) => {
        this.addFile(result);
        this._service.resetFileInput(this.loadFileElement);
      });
    }
  }

  addFile(file: FileData) {
    console.log('file data', file.data);
    this.files.push(file);
    this.content += this._service.fileToTag(file);
  }

  saveContent() {
    window.localStorage.setItem('content', this.content);
  }

  ngOnDestroy(): void {
    this.saveContent();
  }
}
