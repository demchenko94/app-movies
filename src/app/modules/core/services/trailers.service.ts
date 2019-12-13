import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class TrailersService {
  constructor(private http: HttpClient) {}

  getTrailers() {
      return this.http.get(environment.api.urlTrailers).pipe(
        map((res: any) => res.trailers)
      );
  }
}
