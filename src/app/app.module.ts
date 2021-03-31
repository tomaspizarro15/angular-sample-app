import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/static/navbar/navbar.component';
import { SideDrawerComponent } from './components/static/side-drawer/side-drawer.component';
import { HomePageComponent } from './components/router/home-page/home-page.component';
import { ProfileComponent } from './components/router/profile/profile.component';
import { FormsModule } from '@angular/forms';

//Routing 

import { APP_ROUTING } from './app.routes'

//Services 
import { NavBarService } from './components/services/navbar.service';
import { ProductService } from './components/services/product.service'
import { ProductsComponent } from './components/router/products/products.component';
import { ProductComponent } from './components/router/product/product.component';
import { NavListComponent } from './components/util/nav-list/nav-list.component';
import { ListComponent } from './components/util/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ProfileComponent,
    ProductsComponent,
    ProductComponent,
    NavListComponent,
    ListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
  ],
  providers: [NavBarService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
