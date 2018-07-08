import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeViewService {

  searchNode$: Subject<number> = new Subject();
  constructor() { }
}
