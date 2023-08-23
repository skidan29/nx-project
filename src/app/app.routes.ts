import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: 'st', loadComponent: () => import('./standelone/standelone.component').then(comp => comp.StandeloneComponent)},
];
