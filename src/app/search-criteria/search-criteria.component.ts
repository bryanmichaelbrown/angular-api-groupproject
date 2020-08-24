import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  genres: any;
  constructor(private route: ActivatedRoute, private service: MovieService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  //brings the genres to the search component
  getGenres = () => {
    this.service.getGenres().subscribe((response) => {
      console.log(response.genres);
      this.genres = response.genres;
    });
  };
}
