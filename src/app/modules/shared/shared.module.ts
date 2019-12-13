import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { MoviesListComponent, VideoModalComponent, TrailersComponent } from '@modules/shared/components';

@NgModule({
  declarations: [MoviesListComponent, VideoModalComponent, TrailersComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzListModule,
    NzRateModule,
    NzModalModule,
    NzButtonModule,
    NzResultModule,
    NzCarouselModule
  ],
  exports: [
    NzLayoutModule,
    NzIconModule,
    NzListModule,
    NzRateModule,
    NzModalModule,
    NzButtonModule,
    NzResultModule,
    NzCarouselModule,
    MoviesListComponent,
    TrailersComponent
  ],
  entryComponents: [VideoModalComponent]
})
export class SharedModule {}
