import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomScrollComponent } from './custom-scroll.component';

const routes: Routes = [
  { path: '', component: CustomScrollComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomScrollRoutingModule { }
