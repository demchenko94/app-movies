import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class SessionStorageService {
  getData(name) {
    const data = JSON.parse(sessionStorage.getItem(name)) || [];
    return of(data);
  }
}
