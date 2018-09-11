import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClGreedComponent } from './cl-greed.component';

const routes: Routes = [
  { path: '', component: ClGreedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClGreedRoutingModule { }
