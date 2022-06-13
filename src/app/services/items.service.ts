import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ApiResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=5';
  constructor(private http: HttpClient) { }

  getItems(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.url);
  }
}
