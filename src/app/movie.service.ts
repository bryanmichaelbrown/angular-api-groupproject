import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './interfaces/movie';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl: string = 'https://www.themoviedb.org/documentation/api';
  genresUrl: string = 'https://api.themoviedb.org/3/genre/movie/list';
  key: string = 'e28cfe982da0910aa5d17ebdd8601688';
  discoverUrl: string = 'https://api.themoviedb.org/3/discover/movie';
  watchlist: any = [];

  constructor(private http: HttpClient) {}

  getData = (searchTerm: string): any => {
    return this.http.get(this.baseUrl, {
      params: {
        api_key: this.key,
        movie_id: searchTerm,
      },
    });
  };

  //calls all of the genres
  getGenres = (): any => {
    return this.http.get(this.genresUrl, {
      params: {
        api_key: this.key,
      },
    });
  };

  getSortTerms = (category: any): any => {
    return this.http.get(this.discoverUrl, {
      params: {
        api_key: this.key,
        sort_by: category,
      },
    });
  };

  getMovies = (genreId: string, release_year: string, sort: string): any => {
    // let sortValue: string;
    // if (sort === 'pop-desc') {
    //   sortValue = 'popularity.desc';
    // }
    return this.http.get(this.discoverUrl, {
      params: {
        api_key: this.key,
        with_genres: genreId,
        primary_release_year: release_year,
        sort_by: sort,
      },
    });
  };
  onAdd = (index) => {
    this.watchlist.unshift(index);
    console.log(this.watchlist);
  };

  myFavorites = () => {
    return this.watchlist;
  };
}
