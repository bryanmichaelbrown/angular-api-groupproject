import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css'],
})
export class WatchListPageComponent implements OnInit {
  // watchlist: Movie[] = [];

  constructor() {}

  // onAdd = (movie: Movie) => {
  //   this.watchlist.unshift(movie);
  // };

  ngOnInit(): void {}
}
