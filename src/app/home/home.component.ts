import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  genre: any;
  constructor(private service: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies = (): any => {
    this.route.queryParamMap.subscribe((params) => {
      console.log(params.get('genre'));
      let id = params.get('genre');
      this.service.getMovies(id).subscribe((response) => {
        console.log(response.results);
        this.genre = response.results;
      });
    });
  };
}
