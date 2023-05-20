import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Character } from '../models/character';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersListService {

  id: number = 0;
  constructor(private http: HttpClient) { }

  returnValues(): Observable<Character[]> {
    return this.http.get<Character[]>("http://localhost:3000/characters").pipe(
      catchError(this.handleError)
    );
  };

  deleteCharacter(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/characters/${id}`).pipe(
      catchError(this.handleError)
    );
  };

  getCharacter(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/characters/" + id).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  };

}
