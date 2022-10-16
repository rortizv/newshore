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
  public auxOrigin: any;
  public auxDestination: any;

  miFormulario: FormGroup = this.fb.group({
    origin: [ , [ Validators.required, Validators.minLength(3) ]   ],
    destination: [ , [ Validators.required, Validators.minLength(3)] ]
  });

  constructor(private fb: FormBuilder,
              private tripsService: TripsService) {}

  searchTrips() {
    if ( this.miFormulario.invalid )  {
      this.miFormulario.markAllAsTouched();
      return;
    }

    if (this.miFormulario.value.origin === this.miFormulario.value.destination) {
      this.sameInputs = true;
      setTimeout(() => {
        this.sameInputs = false;
      },3000);
    } else {
      var origin = this.miFormulario.value.origin;
      var destination = this.miFormulario.value.destination;
  
      this.tripsService.getTrips()
        .subscribe((response: Flight[]) => {
          const tripsFiltered = response.filter(flight => {
            if (flight.departureStation === origin) {
              this.auxOrigin = origin;
              this.auxDestination = destination;
              //TODO: Buscar en el siguiente objeto del array Flight[]

              
            }

            //TODO:  Buscar el flight siguiente a este, uno cuyo Origin coincida con
            //       el Destination del que acabo de encontrar
            if (flight.departureStation === this.auxDestination) {
              return;
            }
          }  
        );

          if (tripsFiltered.length === 0) {
            this.noTrips = true;
            setTimeout(() => {
              this.noTrips = false;
            },3000);
          }
        });
    }



    
  }

}
