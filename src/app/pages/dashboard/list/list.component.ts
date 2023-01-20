import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Earthquake } from 'src/app/models/earthquakes';
import { selectEarthquakes } from 'src/app/state';
import { GetEarthquakeData } from 'src/app/state/actions/earthquake.action';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data!: Earthquake;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    // Subscriber for data change or get
    this.store.pipe(select(selectEarthquakes)).subscribe(data => {
      if (!data) { // Trigger Get event
        this.store.dispatch(new GetEarthquakeData());
      }
      this.data = data;
    }, e => console.error(e));
  }

}
