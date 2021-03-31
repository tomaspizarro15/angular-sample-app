import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './components/router/home-page/home-page.component'

const APP_ROUTES: Routes = [
    { path: '/home', component: HomePageComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },
]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
