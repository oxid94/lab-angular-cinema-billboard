import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Array<Object> = [];
  constructor(private theCinema: CinemaService) {}

  ngOnInit() {
    this.getmovies();
  }

  getmovies() {
    this.movies = this.theCinema.getmovies();
  }

}
