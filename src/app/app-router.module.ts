import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoadFileComponent } from './load-file/load-file.component';
import { ROUTES_PATH } from './shared/constants/routes.const';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
  { path: ROUTES_PATH.loadFile, component: LoadFileComponent },
  { path: ROUTES_PATH.tree, loadChildren: './tree-page/tree-page.module#TreePageModule' },
  { path: ROUTES_PATH.tooltip, component: AboutPageComponent },
  { path: ROUTES_PATH.scroll, loadChildren: './scroll-page/scroll-page.module#ScrollPageModule' },
  { path: ROUTES_PATH.biWindow, loadChildren: './bi-window-page/bi-window-page.module#BiWindowPageModule' },
  { path: ROUTES_PATH.header, loadChildren: './header-style/header-style.module#HeaderStyleModule' },
  { path: ROUTES_PATH.grid, loadChildren: './cl-greed/cl-greed.module#ClGreedModule' },
  { path: ROUTES_PATH.custom_scroll, loadChildren: './custom-scroll/custom-scroll.module#CustomScrollModule' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
