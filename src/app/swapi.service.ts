import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Films } from './interfaces/film.interface';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Films> {
    return this.http.get<Films>(`${environment.swapiUrl}/films`);
  }
}
