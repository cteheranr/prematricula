import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'buscar',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'usuario/:id',
    loadComponent: () =>
      import('./pages/usuario/usuario.component').then(
        (m) => m.UsuarioComponent
      ),
  },
  { path: '**', redirectTo: 'buscar' },
];
