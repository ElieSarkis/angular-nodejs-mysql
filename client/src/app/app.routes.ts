import { Routes } from '@angular/router';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    // { path: 'city/:name', component: CityDetailComponent },
    { path: '', component: HomeComponent },
    { path: 'city/:name', component: CityDetailComponent },
];

