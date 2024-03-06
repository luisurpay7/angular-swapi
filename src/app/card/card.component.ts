import { Component, Input } from '@angular/core';
import { Film } from '../interfaces/film.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() film: Film = {} as Film;

  ngOnInit(){
    console.log(this.film);
  }
}
