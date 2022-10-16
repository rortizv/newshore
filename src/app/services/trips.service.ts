import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Flight } from '../modules/models/flight';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  public getTrips() {
    return this.http.get<Flight[]>(environment.API_URL);
  }

}
