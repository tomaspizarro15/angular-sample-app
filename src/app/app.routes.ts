import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './components/router/home-page/home-page.component'
import { ProfileComponent } from './components/router/profile/profile.component'
import { ProductComponent } from './components/router/product/product.component'
const APP_ROUTES: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
