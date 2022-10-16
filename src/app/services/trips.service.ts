import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Flight } from '../modules/models/flight';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private API_URL: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  public async getTrips() {
    const peticion = await this.http.get(this.API_URL);
    console.log(peticion);
  }

}
