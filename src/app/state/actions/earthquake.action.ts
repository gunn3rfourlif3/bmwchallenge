import { Action } from '@ngrx/store';
import { Earthquake, Feature } from 'src/app/models/earthquakes';

export const GET_EARTHQUAKE = '[Earthquake] Get';
export const GET_EARTHQUAKESLIST_SUCCESS = '[Earthquake] User Loaded Success';
export const GET_EARTHQUAKE_DETAILS = '[Earthquake] Get Details';
export const GET_EARTHQUAKE_DETAILS_SUCCESS = '[Earthquake] Get Details Success';

export class UserActionType implements Action {
  type!: string;
  data!: Earthquake;
}
export class GetEarthquakeData implements Action {
  readonly type = GET_EARTHQUAKE;
  constructor(public payload?: Earthquake) { }
}

export class GetEarthquakesSuccess implements Action {
  readonly type = GET_EARTHQUAKESLIST_SUCCESS;
  constructor(public payload: { data: Earthquake }) { }
}

export class GetEarthquakeDetails implements Action {
  readonly type = GET_EARTHQUAKE_DETAILS;
  constructor(public id: string) { }
}

export class GetEarthquakeDetailsSuccess implements Action {
  readonly type = GET_EARTHQUAKE_DETAILS_SUCCESS;
  constructor(public payload: { data: Feature }) { }
}

export type EarthquakesAction = GetEarthquakeData | GetEarthquakesSuccess | GetEarthquakeDetails | GetEarthquakeDetailsSuccess;
