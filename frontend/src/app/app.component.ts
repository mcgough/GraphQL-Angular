import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieSearchGQL, Query, PersonSearchGQL } from '../generated/graphql';
import { debounceTime } from 'rxjs/operators';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchForm: any;
  title: string = 'The Movie Database API';
  subTitle: string = 'Graphql & Angular';
  searchResults: Query['personSearch'] | Query['movieSearch'];
  searchVisible: boolean = false;
  types: SelectItem[] = [
    { label: 'Movies', value: 'movie' },
    { label: 'People', value: 'people'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private movieSearchGQL: MovieSearchGQL,
    private personSearchGQL: PersonSearchGQL  
  ) {
    this.searchForm = this.formBuilder.group({
      input: '',
      type: 'people',
    })
  }

  ngOnInit() {
  }
  
  showSearch(): void {
    this.searchVisible = true;
  }
  onSubmit({ input, type }): void  {
    switch(type) {
      case 'movie':
        this.movieSearch(input)
        return;
      case 'people':
        this.personSearch(input);
        return;
    }
    this.movieSearch(input);
  }
  movieSearch(input: string): void {
    this.movieSearchGQL.watch({ input })
      .valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe((({ data, loading }) => {
        this.searchResults = data.movieSearch;
      }));
  }
  personSearch(input: string): void {
    this.personSearchGQL.watch({ input })
      .valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe(({ data, loading }) => {
        this.searchResults = data.personSearch;
      });
  }
}
