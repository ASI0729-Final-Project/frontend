import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutessService {
  private apiUrl = 'https://routess-api.free.beeceptor.com';

  constructor(private http: HttpClient) {}

  getRoutess(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/routess`);
  }

}
