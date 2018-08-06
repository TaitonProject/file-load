import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderStyleComponent } from './header-style.component';

const routes: Routes = [
  { path: '', component: HeaderStyleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderStyleRoutingModule { }
