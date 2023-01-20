import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Feature } from 'src/app/models/earthquakes';
import { selectEarthquakeDetails } from 'src/app/state';
import { GetEarthquakeDetails } from 'src/app/state/actions/earthquake.action';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  data!: Feature | null;
  id!: string;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getData();
  }

  getData() {
    // Subscriber for data change or get
    this.store.pipe(select(selectEarthquakeDetails)).subscribe(data => {
      if (data?.id !== this.id) {
        this.data = null;
      } else {
        this.data = data;
      }
    }, e => console.error(e));
    if (!this.data || this.data.id !== this.id) {
      // Trigger Get event
      this.store.dispatch(new GetEarthquakeDetails(this.id));
    }
  }

}
