import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './interfaces/movie';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl: string = 'https://www.themoviedb.org/documentation/api';
  genresUrl: string = 'https://api.themoviedb.org/3/genre/movie/list';
  key: string = 'e28cfe982da0910aa5d17ebdd8601688';
  discoverUrl: string = 'https://api.themoviedb.org/3/discover/movie';
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

  //calls movies within the genre specified

  // getMovies = (genreId:string): any => {
  //   return this.http.get(this.discoverUrl), {

  //   }
  // }

  getMovies = (genreId: string): any => {
    return this.http.get(this.discoverUrl, {
      params: {
        api_key: this.key,
        with_genres: genreId,
      },
    });
  };
}
