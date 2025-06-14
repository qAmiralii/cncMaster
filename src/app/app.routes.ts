import { Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/ui/login.component';
import { PublicNavComponent } from './navigation/public-nav/ui/public-nav.component';
import { HomeComponent } from './pages/public/home/ui/home.component';
import { ProductCardComponent } from './pages/public/product-card/ui/product-card.component';
import { SupportComponent } from './pages/public/support/ui/support.component';
import { NewsCardComponent } from './pages/public/news-card/ui/news-card.component';
import { PrivateNavComponent } from './navigation/private-nav/ui/private-nav.component';
import { AdminProductsComponent } from './pages/private/admin-products/ui/admin-products.component';

export const routes: Routes = [
    {
        path: 'public', component: PublicNavComponent, children: [
            { path: 'home', component: HomeComponent, pathMatch: 'prefix' },
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'products', component: ProductCardComponent, pathMatch: 'full' },
            { path: 'support', component: SupportComponent, pathMatch: 'prefix' },
            { path: 'news', component: NewsCardComponent, pathMatch: 'prefix' }
        ]
    },
    {
        path: 'private', component: PrivateNavComponent, children: [
            { path: 'products', component: AdminProductsComponent, pathMatch: "prefix" }
        ]
    },
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' }

];
