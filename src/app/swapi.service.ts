import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Films } from './interfaces/film.interface';
import { environment } from '../environments/environment.development';
import { Character, Characters } from './interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Films> {
    return this.http.get<Films>(`${environment.swapiUrl}/films`);
  }

  getCharacter(url: string): Observable<Character> {
    return this.http.get<Character>(url);
  }

  getGroupCharacters(url: string): Observable<Characters> {
    return this.http.get<Characters>(url);
  }
}
