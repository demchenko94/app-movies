import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

import {map, tap} from 'rxjs/operators';
// import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class MoviesService {
  // isLoading = new BehaviorSubject(false);
  constructor(private http: HttpClient) {}

  getTopMovies() {
    return this.http.get(environment.api.urlTopMovies()).pipe(
      map( (result: any) => result.data.movies)
    )
  }
}
