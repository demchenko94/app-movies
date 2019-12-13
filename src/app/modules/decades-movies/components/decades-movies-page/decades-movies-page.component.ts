import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './decades-movies-page.component.html',
  styleUrls: ['./decades-movies-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecadesMoviesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
