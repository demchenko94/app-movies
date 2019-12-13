import { Component, Input, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

import { VideoModalComponent } from '@modules/shared/components/video-modal/video-modal.component';

import { TrailersService } from '@modules/core/services';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '@app/store';

import { trailer } from '@app/store/movies';

import { Trailer } from '@modules/core/models/trailer';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss'],
  providers: [TrailersService]
})
export class TrailersComponent implements OnInit {
  @Input() idIMDB: string;
  trailer$: Observable<Trailer>;

  constructor(private store: Store<AppState>, private trailersService: TrailersService, private modalService: NzModalService) {}

  ngOnInit() {
    this.trailer$ = this.store.select(trailer(this.idIMDB));
  }

  openModalVideo(videoURL) {
    const modal = this.modalService.create({
      nzContent: VideoModalComponent,
      nzComponentParams: {
        videoURL: videoURL
      }
    });
  }
}
