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

  // public flights: Array<Flight> = [];

  miFormulario: FormGroup = this.fb.group({
    origin: [ , [ Validators.required, Validators.maxLength(3) ]   ],
    destination: [ , [ Validators.required, Validators.maxLength(3)] ]
  });

  constructor(private fb: FormBuilder,
              private tripsService: TripsService) {}

  searchTrips() {
    if ( this.miFormulario.invalid )  {
      this.miFormulario.markAllAsTouched();
      return;
    }

    var origin = this.miFormulario.value.origin;
    var destination = this.miFormulario.value.destination;

    this.tripsService.getTrips()
      .subscribe((response: Flight[]) => {
        const tripsFiltered = response.filter(flight =>
          flight.departureStation === origin && flight.arrivalStation === destination
        );
      });


    
  }

}
