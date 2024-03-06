import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Film, Films } from '../interfaces/film.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  films: Films = {} as Films;
  dataFilm: Film = {} as Film;

  constructor(private swapiService: SwapiService){}

  ngOnInit(){
    this.swapiService.getFilms().subscribe(response => {
      this.films = response;
    });
  }

  showModal(id: number){
    this.dataFilm = this.films.results[id];
    const element = document.getElementById("filmModal");
    if(element){
      element.style.display = 'block';
    }
  }

  closeModal() {
    const element = document.getElementById("filmModal");
    if(element){
      element.style.display = 'none';
    }
  }

}
