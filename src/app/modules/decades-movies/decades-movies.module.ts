import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecadesMoviesRoutingModule } from './decades-movies-routing.module';
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DecadesMoviesRoutingModule, SharedModule]
})
export class DecadesMoviesModule {}
