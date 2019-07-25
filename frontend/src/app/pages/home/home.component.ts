import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie, PopularMoviesGQL } from '../../../generated/graphql';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Observable<Movie[]>;
  
  constructor(private popularMoviesGQL: PopularMoviesGQL) { }
  
  ngOnInit() {
    this.popularMovies = this.popularMoviesGQL.watch()
      .valueChanges
      .pipe(
        map(result => result.data.popularMovies)
      );
  }

}
