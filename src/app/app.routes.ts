import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'albums-list', pathMatch: 'full' },
  // { path: '**', redirectTo: 'albums-list', pathMatch: 'full' },
  {
    path: 'albums-list',
    loadComponent: () =>
      import('./pages/albums-list/albums-list.component').then(
        (c) => c.AlbumsListComponent
      ),
  },
  {
    path: 'create-album',
    loadComponent: () =>
      import('./pages/albums-create/albums-create.component').then(
        (c) => c.AlbumsCreateComponent
      ),
  },
  {
    path: 'album-detail/:id',
    loadComponent: () =>
      import('./pages/album-detail/album-detail.component').then(
        (c) => c.AlbumDetailComponent
      ),
  },
  {
    path: 'edit-album/:id',
    loadComponent: () =>
      import('./pages/albums-create/albums-create.component').then(
        (c) => c.AlbumsCreateComponent
      ),
  },
];
