import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Films } from '../interfaces/film.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  films: Films = {} as Films;

  constructor(private swapiService: SwapiService){}

  ngOnInit(){
    this.swapiService.getFilms().subscribe(response => {
      this.films = response;
    });
  }
}
