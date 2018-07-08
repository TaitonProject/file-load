import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SecondComponent } from './second/second.component';
import { LoadFileComponent } from './load-file/load-file.component';
import { FilerFilePipe } from './load-file/pipes/filter-file.pipe';
import { SafePipe } from './load-file/pipes/safe.pipe';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-router.module';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    SecondComponent,
    LoadFileComponent,
    FilerFilePipe,
    SafePipe,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
