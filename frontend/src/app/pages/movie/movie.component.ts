import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Query, MovieGQL } from '../../../generated/graphql';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  id: number;
  movie: Query['movie'];
  loading: boolean;

  constructor(private route: ActivatedRoute, private movieGQL: MovieGQL) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id");
      this.loading = true;
      this.movieGQL.watch({ id: this.id })
        .valueChanges
        .subscribe(({ data, loading }) => {
          this.movie = data.movie;
          this.loading = loading;
        })
    })
  }

}
