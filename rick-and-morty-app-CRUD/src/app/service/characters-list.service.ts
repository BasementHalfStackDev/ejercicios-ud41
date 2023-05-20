import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Character } from '../models/character';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersListService {

  // Inject HttpClient
  constructor(private http: HttpClient) { }

  // Function to get all characters
  returnValues(): Observable<Character[]> {
    return this.http.get<Character[]>("http://localhost:3000/characters").pipe(
      catchError(this.handleError)
    );
  };

  // Function to delete character
  deleteCharacter(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/characters/${id}`).pipe(
      catchError(this.handleError)
    );
  };

  // Function to get character data by ID
  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>("http://localhost:3000/characters/" + id).pipe(
      catchError(this.handleError)
    );
  }

  // Function to add character
  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>("http://localhost:3000/characters", character).pipe(
      catchError(this.handleError)
    );
  }

  // Function to modify character
  modCharacter(id: number, character: Character): Observable<Character> {
    return this.http.put<Character>("http://localhost:3000/characters/"+id, character).pipe(
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
