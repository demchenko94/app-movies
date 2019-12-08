import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzRateModule } from 'ng-zorro-antd/rate';

@NgModule({
  declarations: [],
  imports: [CommonModule, NzLayoutModule, NzListModule, NzRateModule],
  exports: [NzLayoutModule , NzIconModule, NzListModule, NzRateModule]
})
export class SharedModule {}
