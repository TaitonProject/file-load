import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiWindowPageComponent } from './bi-window-page.component';

const routes: Routes = [
  { path: '', component: BiWindowPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiWindowPageRoutingModule { }
