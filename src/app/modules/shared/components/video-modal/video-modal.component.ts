import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent implements OnInit {
  @Input() videoURL: string;
  constructor() {}

  ngOnInit() {}
}
