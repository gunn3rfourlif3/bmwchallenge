import { Earthquake, Feature } from '../models/earthquakes';

export interface AppState {
    earthquakes: Earthquake;
    earthquakeDetails: Feature;
}
