import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecadesMoviesRoutingModule } from './decades-movies-routing.module';
import { SharedModule } from '@modules/shared/shared.module';

import { DecadesMoviesPageComponent } from '@modules/decades-movies/components';

@NgModule({
  declarations: [DecadesMoviesPageComponent],
  imports: [CommonModule, DecadesMoviesRoutingModule, SharedModule],
})
export class DecadesMoviesModule {}
