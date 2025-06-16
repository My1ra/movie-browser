import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout/layout.component').then((m) => m.LayoutComponent),
    children: [
        {
            path: '',
            loadComponent: () =>
                import('./pages/home/home.component').then((m) => m.HomeComponent),
        },
        {
            path: 'movie/:id',
            loadComponent: () =>
                import('./pages/movie-details/movie-details.component').then((m) => m.MovieDetailsComponent),
        },
        {
            path: 'about',
            loadComponent: () => 
                import('./pages/about/about.component').then((m) => m.AboutComponent),
        },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
