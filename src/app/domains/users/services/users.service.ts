import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://user-api.free.beeceptor.com/api/users';

  constructor(private http: HttpClient) {}

login(email: string, password: string): Observable<boolean> {
  return this.http.get<any[]>(this.apiUrl).pipe(
    map(users => {
      const user = users.find(u => u.Email === email && u.Password === password);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      }
      return false;
    }),
    catchError(() => of(false))
  ); // <-- Paréntesis de cierre añadido aquí
}

register(userData: any): Observable<boolean> {
    return this.http.post(this.apiUrl, userData).pipe(
      map((response: any) => {
        // Asumiendo que la API devuelve el usuario creado
        if (response) {
          return true;
        }
        return false;
      }),
      catchError((error) => {
        console.error('Registration error:', error);
        return of(false);
      })
    );
  }
  
  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.some(u => u.Email === email)),
      catchError(() => of(false))
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
}