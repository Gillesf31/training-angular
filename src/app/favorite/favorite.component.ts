import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  styles: [
    `
    #test {
      color: green;
    }
    `
  ]
})
export class FavoriteComponent {
  faStar = faStar;
  faEmptyStar = faEmptyStar;
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  addToFav() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }

  constructor() { }
}
