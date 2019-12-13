import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoviesService, SessionStorageService, TrailersService } from '@modules/core/services';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [MoviesService, TrailersService, SessionStorageService]
    };
  }
}
