import { Component, OnInit } from '@angular/core';
import { HomePageService, People } from '../home-page/home-page.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  public text$: Observable<string>;
  peoples: any[] = [];
  show = true;

  constructor(public pageSerivce: HomePageService) { }

  ngOnInit() {
    this.pageSerivce.peoples$.subscribe(text => {
      this.peoples = text;
      console.log('peopls changed!');
      this.refresh();
    });
  }

  refresh() {
    console.log('refreshed!');
  }

  peopleChecked(people: People, value: any) {
    people.active = value;
    // const currentPeoples = this.pageService.peoples$.getValue();
    // currentPeoples.find(searchPeople => searchPeople.name === people.name).active = value;
    // this.pageService.peoples$.next(currentPeoples);
  }

}
