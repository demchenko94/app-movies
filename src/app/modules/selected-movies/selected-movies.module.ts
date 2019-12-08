import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedMoviesRoutingModule } from './selected-movies-routing.module';
import { SharedModule } from '@modules/shared/shared.module';

import { SelectedMoviesPageComponent } from '@modules/selected-movies/components';

@NgModule({
  declarations: [SelectedMoviesPageComponent],
  imports: [CommonModule, SelectedMoviesRoutingModule, SharedModule]
})
export class SelectedMoviesModule {}
