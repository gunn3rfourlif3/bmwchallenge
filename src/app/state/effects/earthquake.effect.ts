import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { EarthquakeService } from 'src/app/services/earthquake.service';
import {
  GetEarthquakeData,
  GetEarthquakeDetails,
  GetEarthquakeDetailsSuccess,
  GetEarthquakesSuccess,
  GET_EARTHQUAKE,
  GET_EARTHQUAKE_DETAILS,
} from '../actions/earthquake.action';

@Injectable()
export class UserEffect {

  constructor(private actions$: Actions, private earthquakeSerive: EarthquakeService, protected http: HttpClient) { }

  loadEarthquakeList$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType<GetEarthquakeData>(GET_EARTHQUAKE),
        mergeMap((action) => this.earthquakeSerive.getEarthquakesList()
          .then(data => {
            return (new GetEarthquakesSuccess({ data }));
          })
        ));;
  });

  loadEarthquakeDetails$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType<GetEarthquakeDetails>(GET_EARTHQUAKE_DETAILS),
        mergeMap((action) => this.earthquakeSerive.getEarthquakesDetails(action.id || '')
          .then(data => {
            return (new GetEarthquakeDetailsSuccess({ data }));
          })
        ));;
  });
}
