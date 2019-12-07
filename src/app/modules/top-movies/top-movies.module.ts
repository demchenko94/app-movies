import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopMoviesRoutingModule } from './top-movies-routing.module';
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TopMoviesRoutingModule, SharedModule]
})
export class TopMoviesModule {}
