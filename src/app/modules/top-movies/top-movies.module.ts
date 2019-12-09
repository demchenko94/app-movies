import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopMoviesRoutingModule } from './top-movies-routing.module';

import { SharedModule } from '@modules/shared/shared.module';
import { TopMoviesPageComponent } from '@modules/top-movies/components';

@NgModule({
  declarations: [TopMoviesPageComponent],
  imports: [CommonModule, TopMoviesRoutingModule, SharedModule]
})
export class TopMoviesModule {}
