import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Error404Component } from './error-404/404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoursesModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
