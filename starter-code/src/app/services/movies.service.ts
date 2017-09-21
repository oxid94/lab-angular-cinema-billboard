import { Injectable } from '@angular/core';
import movies from '../../assets/sample-movies';

@Injectable()
export class MoviesService {
  Movies: Array<Object> = movies;

  constructor() { }

  getmovies() {
    return this.Movies;
  }

  getMovie(id) {
    return this.Movies.filter( (movie) => {
      if( movie["id"] === id){
        return movie;
      }
    });
  }
}
