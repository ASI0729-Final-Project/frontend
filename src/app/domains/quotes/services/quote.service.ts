import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'https://nango-api.free.beeceptor.com'; 

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/quotes`);
  }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/driver-comments`);
  }

  reserveTrip(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservations`, data);
  }
}
