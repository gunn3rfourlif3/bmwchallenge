import { ActionReducerMap } from '@ngrx/store';
import { Earthquake } from '../models/earthquakes';
import { AppState } from './app.state';
import { earthquakeDetailsReducer, earthquakeReducer } from './reducers/earthquake.reducer';
import * as actions from './actions/earthquake.action';

export const reducers: ActionReducerMap<AppState, any> = {
  earthquakes: earthquakeReducer,
  earthquakeDetails: earthquakeDetailsReducer,
};

export function earthquakesReducer(state: Earthquake | [], action: actions.EarthquakesAction): Earthquake {
  return earthquakeReducer(state, action);
}

export const selectEarthquakes = (state: AppState) => state.earthquakes;
export const selectEarthquakeDetails = (state: AppState) => state.earthquakeDetails;
