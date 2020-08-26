import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieService } from '../movie.service';
// import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css'],
})
export class WatchListPageComponent implements OnInit {
  @Input() favRef: any;
  @Output() deleted = new EventEmitter<void>();
  constructor() {}

  deleteMovie() {
    this.deleted.emit();
  }
  ngOnInit(): void {}
}
