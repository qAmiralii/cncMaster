import { Routes } from '@angular/router';
import { PublicNavComponent } from './navigation/private-nav/ui/public-nav/public-nav.component';

export const routes: Routes = [
    {
        path: 'public', component:PublicNavComponent, children: [

        ]
    },
    {path:'', redirectTo:'public', pathMatch:'full'}
];
