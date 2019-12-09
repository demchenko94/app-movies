import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';

import { NzRateModule } from 'ng-zorro-antd/rate';
import { MoviesListComponent } from '@modules/shared/components';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [CommonModule, FormsModule, NzLayoutModule, NzListModule, NzRateModule],
  exports: [NzLayoutModule, NzIconModule, NzListModule, NzRateModule, MoviesListComponent]
})
export class SharedModule {}
