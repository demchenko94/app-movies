import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TopMoviesRoutingModule } from './top-movies-routing.module';

import { SharedModule } from '@modules/shared/shared.module';
import { TopMoviesPageComponent, MoviesListComponent } from '@modules/top-movies/components';

@NgModule({
  declarations: [TopMoviesPageComponent, MoviesListComponent],
  imports: [CommonModule, TopMoviesRoutingModule, SharedModule, FormsModule]
})
export class TopMoviesModule {}
