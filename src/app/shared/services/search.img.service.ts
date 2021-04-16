import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchImgModel} from '../models/search.img.model';

@Injectable({
  providedIn: 'root'
})
export class SearchImgService {
  private clientId = environment.accessKey;
  constructor(private http: HttpClient) { }

  public getImages(name: string): Observable<SearchImgModel> {
    const url = `${environment.url}?client_id=${this.clientId}&query=${name}`;
    return this.http.get<SearchImgModel>(url);
  }

}
