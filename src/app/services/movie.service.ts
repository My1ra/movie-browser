import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class MovieService {
  private BASE_URL = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}
  

  getPopularMovies() {
    return this.http.get(`${this.BASE_URL}/movie/popular?api_key=${environment.tmdbApiKey}`);
  }

  searchMovies(query: string) {
    return this.http.get(`${this.BASE_URL}/search/movie?api_key=${environment.tmdbApiKey}&query=${query}`);
  }

  getMovieDetails(id: number) {
    return this.http.get(`${this.BASE_URL}/movie/${id}?api_key=${environment.tmdbApiKey}`);
  }

  getSimilarMovies(id: number) {
    return this.http.get(`${this.BASE_URL}/movie/${id}/similar?api_key=${environment.tmdbApiKey}`);
  }

}

