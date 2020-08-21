import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl: string = 'https://www.themoviedb.org/documentation/api';
  key: string = 'e28cfe982da0910aa5d17ebdd8601688';
  constructor(private service: HttpClient) {}

  getData = (searchTerm: string): any => {
    return this.service.get(this.baseUrl, {
      params: {
        api_key: this.key,
        movie_id: searchTerm,
      },
    });
  };
}
