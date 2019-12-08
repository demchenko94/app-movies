import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedMoviesPageComponent } from '@modules/selected-movies/components';

const routes: Routes = [
  {
    path: '',
    component: SelectedMoviesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectedMoviesRoutingModule {}
