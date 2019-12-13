import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getTopMovies() {
    return this.http.get(environment.api.urlTopMovies()).pipe(
      map( (result: any) => result.data.movies)
    )
  }
}
