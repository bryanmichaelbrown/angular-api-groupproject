import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() movieRef: any;
  @Output() addEvent = new EventEmitter<void>();
  watchlist: Movie[] = [];
  showDetails: boolean = true;

  constructor() {}

  // onAdd = (movie: Movie) => {
  //   this.watchlist.unshift(movie);
  // };
  ngOnInit(): void {}

  addMovie = () => {
    this.addEvent.emit();
  };
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
