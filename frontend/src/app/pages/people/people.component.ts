import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Query, PersonGQL } from '../../../generated/graphql';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  person: Query['person'];
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private personGQL: PersonGQL
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loading = true;
      this.personGQL.watch({ id: +params.get("id") })
        .valueChanges
        .subscribe(({ data, loading }) => {
          this.person = data.person;
          this.loading = loading;
        })
    })
  }

}
