import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecadesMoviesPageComponent } from '@modules/decades-movies/components';

const routes: Routes = [
  {
    path: '',
    component: DecadesMoviesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecadesMoviesRoutingModule {}
