import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  genres: any;
  constructor(private router: Router, private service: MovieService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  //brings the genres to the search component
  getGenres = () => {
    this.service.getGenres().subscribe((response) => {
      // console.log(response.genres);
      this.genres = response.genres;
    });
  };

  search = (form: NgForm) => {
    console.log('howdy');

    this.router.navigate(['home'], {
      queryParams: {
        genre: form.value.genre,
      },
    });
  };
}
