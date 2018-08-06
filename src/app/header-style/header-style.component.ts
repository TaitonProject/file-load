import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl-header-style',
  templateUrl: './header-style.component.html',
  styleUrls: ['./header-style.component.less']
})
export class HeaderStyleComponent implements OnInit {

  text = 'Я думаю, многие из вас, кому приходилось заниматься версткой,' +
    'сталкивались с необходимостью выравнивать элементы по вертикали и знают,' +
    'какие сложности возникают при выравнивании элемента по центру. Да, для вертикального' +
    'выравнивания в CSS есть специальное свойство vertical-align с множеством значений. Однако ' +
    'на практике оно работает совсем не так, как ожидается. Давайте попробуем в этом разобраться.';

  constructor() { }

  ngOnInit() {
  }

}
