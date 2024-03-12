import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Film, Films } from '../interfaces/film.interface';
import { Character, Characters } from '../interfaces/character.interface';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  films: Films = {} as Films;
  dataFilm: Film = {} as Film;
  characters: Character[] = [];
  people: Characters = {} as Characters;

  constructor(private swapiService: SwapiService){}

  async ngOnInit(){
    this.swapiService.getFilms().subscribe(response => {
      response.results.sort((a,b) => a.episode_id - b.episode_id);
      this.films = response;
    });

    // let nextUrl = `${environment.swapiUrl}/people`;
    // do{
    //   this.people = await this.swapiService.getGroupCharacters(nextUrl).toPromise() || {} as Characters;
    //   this.characters = this.characters.concat(this.people.results);
    //   nextUrl = this.people.next;
    // }while(this.people.next);
    // console.log(this.characters)
  }

  showModal(id: number){
    this.dataFilm = this.films.results[id];
    this.characters = [];
    this.dataFilm.characters.forEach(characterUrl => {
      this.swapiService.getCharacter(characterUrl).subscribe(response => {
        this.characters.push(response);
      });
    });

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
