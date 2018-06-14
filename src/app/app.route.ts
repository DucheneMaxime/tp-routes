import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

export const PATH_HOME: string = '';
export const PATH_DETAIL: string = 'detail';
export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomeComponent },
    { path: PATH_DETAIL, component: DetailComponent }
];