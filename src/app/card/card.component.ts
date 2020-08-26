import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() movieRef: any;
  @Input() indexRef: number;
  @Output() addEvent = new EventEmitter<void>();
  watchlist: Movie[] = [];
  showIndex: number;
  constructor() {}

  // onAdd = (movie: Movie) => {
  //   this.watchlist.unshift(movie);
  // };
  ngOnInit(): void {}

  addMovie = () => {
    this.addEvent.emit();
  };

  setShowIndex = (index: number) => {
    if (this.showIndex >= 0) {
      this.showIndex = -1;
    } else {
      this.showIndex = index;
    }
  };
}
