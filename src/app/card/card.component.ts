import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../interfaces/film.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() film: Film = {} as Film;
  @Input() numero: number = 0;
  @Output() showModal: EventEmitter<number> = new EventEmitter<number>;

  ngOnInit(){
    console.log(this.film);
  }

  openModal(){
    this.showModal.emit(this.numero);
  }

}
