import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent, PageNotFoundComponent } from '@app/components';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'top-movies',
    loadChildren: () => import('@modules/top-movies/top-movies.module').then(m => m.TopMoviesModule)
  },
  {
    path: 'decades-movies',
    loadChildren: () => import('@modules/decades-movies/decades-movies.module').then(m => m.DecadesMoviesModule)
  },
  {
    path: 'selected-movies',
    loadChildren: () => import('@modules/selected-movies/selected-movies.module').then(m => m.SelectedMoviesModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
