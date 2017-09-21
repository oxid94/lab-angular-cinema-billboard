import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../../services/cinema.service'

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  // movie: Object = {};
  movieID: Number;
  movie: Object;
  constructor(private route: ActivatedRoute, private theCinema: CinemaService) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => { 
      this.movieID = Number(params['id']);
      this.movie = this.theCinema.getMovie(this.movieID);
      console.log(this.movie );
    });
  }

}
