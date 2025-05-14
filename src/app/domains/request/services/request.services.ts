import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, delay } from 'rxjs/operators';

export interface Request {
  id: number;
  type: string;
  status: 'Confirmed' | 'Pending' | 'Rejected' | 'Completed' | 'Canceled';
  trip: string;
  passenger: string;
  message: string;
  sentDate: string;
  viewComments: boolean;
  requestCount?: number;
}

export interface Comment {
  id: number;
  requestId: number;
  text: string;
  rating: number;
  author: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  apiUrl = 'https://nango-api-request.free.beeceptor.com';
  private useMockData = false;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la solicitud:', error);
    this.useMockData = true;
    return throwError(() => new Error(error.message || 'Error al conectar con el servidor'));
  }

  // Métodos para Requests
  getRequests(): Observable<Request[]> {
    if (this.useMockData) return of(this.getMockRequests()).pipe(delay(500));

    return this.http.get<Request[]>(`${this.apiUrl}/requests`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getFilteredRequests(type: string, status: string): Observable<Request[]> {
    if (this.useMockData) {
      const requests = this.getMockRequests();
      const filtered = requests.filter(req =>
        (type === '' || req.type === type) &&
        (status === '' || req.status === status)
      );
      return of(filtered).pipe(delay(500));
    }

    let url = `${this.apiUrl}/requests`;
    const params = [];
    if (type) params.push(`type=${type}`);
    if (status) params.push(`status=${status}`);
    if (params.length > 0) url += `?${params.join('&')}`;

    return this.http.get<Request[]>(url).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Métodos para Comments (exportados)
  getComments(requestId: number): Observable<Comment[]> {
    if (this.useMockData) {
      const comments = this.getMockComments().filter(c => c.requestId === requestId);
      return of(comments).pipe(delay(500));
    }

    return this.http.get<Comment[]>(`${this.apiUrl}/comments?requestId=${requestId}`).pipe(
      catchError(this.handleError)
    );
  }

  addComment(comment: Omit<Comment, 'id' | 'createdAt'>): Observable<Comment> {
    const newComment: Comment = {
      ...comment,
      id: Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString()
    };

    if (this.useMockData) return of(newComment).pipe(delay(500));

    return this.http.post<Comment>(`${this.apiUrl}/comments`, comment).pipe(
      catchError(this.handleError)
    );
  }

  // mock
  private getMockRequests(): Request[] {
    return [
      {
        id: 1,
        type: 'Requests',
        status: 'Confirmed',
        trip: 'UNI - 24/05 -13:30',
        passenger: 'Ana Rios',
        message: 'has sent a request, you can review and accept it if you are available for the trip.',
        sentDate: 'Sent on 03/03 at 5:45 PM',
        viewComments: true,
        requestCount: 23
      },
      // ... más mock
    ];
  }

  private getMockComments(): Comment[] {
    return [
      {
        id: 1,
        requestId: 1,
        text: 'I have reviewed and accepted this request',
        rating: 4,
        author: 'Ana Rios',
        createdAt: new Date().toISOString()
      },
      // ... más comentarios mock
    ];
  }
}
