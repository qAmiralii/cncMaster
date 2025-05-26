import { Routes } from '@angular/router';
import { PublicNavComponent } from './navigation/private-nav/ui/public-nav/public-nav.component';
import { LoginComponent } from './pages/public/login/ui/login.component';

export const routes: Routes = [
    {
        path: 'public', component: PublicNavComponent, children: [

        ]
    },
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' }

];
