import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface People {
  name: string;
  age: number;
  active?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private peopleList: Array<People> = [{ name: 'Sasha', age: 23, active: true }, { name: 'Alex', age: 25, active: false }];
  public peoples$: BehaviorSubject<Array<People>> = new BehaviorSubject<Array<People>>(this.peopleList);
  public text$: BehaviorSubject<string> = new BehaviorSubject<string>('hello');

  constructor() { }

}
