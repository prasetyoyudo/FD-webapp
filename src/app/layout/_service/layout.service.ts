import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {
  API_GET_GENERAL,
} from '../_const/layout-api.const'

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(
    private http   : HttpClient
  ) { }

  public getGeneralDataServices() {
    return this.http.get<any>(
      API_GET_GENERAL, {
    });
  }
}
