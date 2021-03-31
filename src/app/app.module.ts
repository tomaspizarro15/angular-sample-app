import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/static/navbar/navbar.component';
import { SideDrawerComponent } from './components/static/side-drawer/side-drawer.component';
import { HomePageComponent } from './components/router/home-page/home-page.component';
import { ProfileComponent } from './components/router/profile/profile.component';

//Routing 

import {APP_ROUTING} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
