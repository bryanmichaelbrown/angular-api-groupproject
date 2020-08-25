import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any;
  watchlist: any = [];
  constructor(private service: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMovies();
    this.watchlist = this.service.myFavorites();
  }

  getMovies = (): any => {
    this.route.queryParamMap.subscribe((params) => {
      console.log(params.get('genre'));
      let id = params.get('genre');
      let year = params.get('release_year');
      let sort = params.get('sort');
      this.service.getMovies(id, year, sort).subscribe((response) => {
        console.log(response.results);
        this.movies = response.results;
      });
    });
  };
  onAdd = (movie: any) => {
    this.service.onAdd(movie);
  };
}
