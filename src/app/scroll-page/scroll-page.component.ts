import { Component, OnInit, ViewChild } from '@angular/core';
import { VirtualScrollComponent } from 'angular2-virtual-scroll';

@Component({
  selector: 'cl-scroll-page',
  templateUrl: './scroll-page.component.html',
  styleUrls: ['./scroll-page.component.css']
})
export class ScrollPageComponent implements OnInit {

  @ViewChild('virtualScroll') virtualScroll: VirtualScrollComponent;

  books: Array<string> = new Array<string>();
  shownBooks: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {
    this.initBooks();
  }

  initBooks() {
    for (let i = 0; i < 200; i++) {
      this.books.push('book number of ' + i);
    }
  }

  deleteBook(book: string) {
    this.books = this.books.filter(_ => book !== _);
  }

  addBook(name: string) {
    const nameWithId = name + this.books.length;
    this.books.push(nameWithId);
    this.virtualScroll.scrollInto(nameWithId);
  }

  insertBook(name: string, index: number) {
    const nameWithId = name + this.books.length;
    this.books.splice(index, 0, nameWithId);
    this.virtualScroll.scrollInto(nameWithId);
  }

  changeBook(name: string, index: number) {
    this.books[index] = name;
    this.virtualScroll.scrollInto(name);
  }
}
