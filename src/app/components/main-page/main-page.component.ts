import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  imagesSrc = [
    'https://www.film.ru/sites/default/files/filefield_paths/https_blogs-images.forbes.com_scottmendelson_files_2019_03_payoff_1-sht_online_v6_domestic_lg-1200x675_0.jpg',
    'https://www.moviepostersusa.com/media/easyslide/rise-of-skywalker.jpg',
    'https://www.wallpaperflare.com/static/425/671/730/star-wars-the-last-jedi-movies-poster-movie-poster-wallpaper.jpg',
    'https://www.myanmore.com/wp-content/uploads/2019/10/Joker-Poster.jpg'
  ];
  constructor() {}

  ngOnInit() {}
}
