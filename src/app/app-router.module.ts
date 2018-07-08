import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoadFileComponent } from './load-file/load-file.component';
import { ROUTES_PATH } from './shared/constants/routes.const';

export const routes: Routes = [
  { path: ROUTES_PATH.loadFile, component: LoadFileComponent },
  { path: ROUTES_PATH.tree, loadChildren: './tree-page/tree-page.module#TreePageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
