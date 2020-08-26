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
  @Input() indexRef: number;
  @Output() deleted = new EventEmitter<void>();
  showIndex: number;
  constructor() {}

  ngOnInit(): void {}

  deleteMovie() {
    this.deleted.emit();
  }

  setShowIndex = (index: number) => {
    if (this.showIndex >= 0) {
      this.showIndex = -1;
    } else {
      this.showIndex = index;
    }
  };
}
