import { Routes } from '@angular/router';

import { BallonsComponent } from './ballons/ballons.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'message',
        component: BallonsComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
