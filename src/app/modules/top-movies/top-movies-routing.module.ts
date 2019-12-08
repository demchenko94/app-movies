import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopMoviesPageComponent } from '@modules/top-movies/components';

const routes: Routes = [
  {
    path: '',
    component: TopMoviesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopMoviesRoutingModule {}
