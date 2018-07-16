import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollPageComponent } from './scroll-page.component';

const routes: Routes = [
  { path: '', component: ScrollPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollPageRoutingModule { }
