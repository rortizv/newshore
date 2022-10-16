import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripsService } from 'src/app/services/trips.service';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-filter-trip',
  templateUrl: './filter-trip.component.html',
  styleUrls: ['./filter-trip.component.css']
})
export class FilterTripComponent {

  public noTrips: boolean = false;
  public sameInputs: boolean = false;
  public tripsFiltered: Flight[] = [];
  public arrayFilteredOrigin: Flight[] = [];
  public arrayFilteredDestination: Flight[] = [];
  public arrayOrigin: Flight[] = [];
  public arrayDestination: Flight[] = [];
  public resultOrigin: Flight[] = [];
  public resultDestination: Flight[] = [];

  miFormulario: FormGroup = this.fb.group({
    origin: [, [Validators.required, Validators.minLength(3)]],
    destination: [, [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: FormBuilder,
    private tripsService: TripsService) { }

  searchTrips() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    var origin: string = this.miFormulario.value.origin;
    var destination: string = this.miFormulario.value.destination;

    origin = origin.toUpperCase();
    destination = destination.toUpperCase();
    
    if (origin === destination) {
      this.sameInputs = true;
      setTimeout(() => {
        this.sameInputs = false;
      }, 3000);
    } else {

      this.tripsService.getTrips()
        .subscribe((response: Flight[]) => {
          this.tripsFiltered = response.filter(flight => {
            if (flight.departureStation === origin) {
              this.arrayFilteredOrigin = response.filter(flightFiltered =>
                flightFiltered.departureStation === origin)
              this.arrayFilteredDestination = response.filter(originFlightFiltered =>
                originFlightFiltered.arrivalStation === destination)

              for (let i = 0; i < this.arrayFilteredDestination.length; i++) {
                for (let j = 0; j < this.arrayFilteredOrigin.length; j++) {
                  if (this.arrayFilteredDestination[i].departureStation === this.arrayFilteredOrigin[j].arrivalStation) {
                    this.arrayOrigin.push(this.arrayFilteredOrigin[j]);
                    this.arrayDestination.push(this.arrayFilteredDestination[i]);
                  }
                }
              }

            }
          }
          );

          this.resultOrigin = this.arrayOrigin.filter((item, index) => {
            return this.arrayOrigin.indexOf(item) === index;
          });

          this.resultDestination = this.arrayDestination.filter((item, index) => {
            return this.arrayDestination.indexOf(item) === index;
          });          

          if (this.tripsFiltered.length === 0) {
            this.noTrips = true;
            setTimeout(() => {
              this.noTrips = false;
            }, 3000);
          }
        });
    }




  }

}
