import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HomePageService, People } from './home-page.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  text: string;
  isShow: boolean;
  peoples: Array<any> = Array<any>();

  @ViewChild('input') inputElement: HTMLInputElement;

  constructor(public pageService: HomePageService) { }

  ngOnInit() {
    // this.text$ = this.pageService.text$.pipe(debounceTime(200));
    this.pageService.text$.pipe(debounceTime(1000)).subscribe(text => this.text = text);
  }

  ngAfterViewInit(): void {
    console.log('input init!', this.inputElement);
    // this.inputElement.oninput = this.onInput();
  }

  changeText(text: string) {
    console.log('text change', text);
    // this.pageService.text$.pipe(debounceTime(500)).next(text);
  }

  onInput() {
    console.log('on input');
  }

  getCurrentValue() {
    this.peoples = this.pageService.peoples$.getValue();
    console.log(this.peoples);
  }

  addPeople() {
    const people = { name: 'ggg', age: 20, active: false };
    this.pageService.peoples$.getValue().push(people);
  }

  peopleChecked(people: People, value: any) {
    people.active = value;
    // const currentPeoples = this.pageService.peoples$.getValue();
    // currentPeoples.find(searchPeople => searchPeople.name === people.name).active = value;
    // this.pageService.peoples$.next(currentPeoples);
  }
}
