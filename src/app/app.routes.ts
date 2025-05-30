import { Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/ui/login.component';
import { PublicNavComponent } from './navigation/public-nav/ui/public-nav.component';
import { HomeComponent } from './pages/public/home/ui/home.component';

export const routes: Routes = [
    {
        path: 'public', component: PublicNavComponent, children: [
            {path: 'home', component: HomeComponent, pathMatch: 'prefix'},
            {path: '', redirectTo: 'home', pathMatch: 'prefix'}

        ]
    },
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' }

];
