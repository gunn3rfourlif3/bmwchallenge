import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Earthquake, Feature } from '../models/earthquakes';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {
  constructor(private restService: RestService) { }

  getEarthquakesList(): Promise<Earthquake> {
    return this.restService.get(`${environment.baseUrl}/fdsnws/event/1/query`, {
      params: {
        format: 'geojson',
        starttime: '2023-01-01',
        endtime: '2023-01-11',
        minmagnitude: 5
      }
    });
  }

  getEarthquakesDetails(eventid: string): Promise<Feature> {
    return this.restService.get(`${environment.baseUrl}/fdsnws/event/1/query`, {
      params: {
        format: 'geojson',
        eventid,
      }
    });
  }

}
