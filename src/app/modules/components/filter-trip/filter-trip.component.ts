import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-filter-trip',
  templateUrl: './filter-trip.component.html',
  styleUrls: ['./filter-trip.component.css']
})
export class FilterTripComponent {

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
    
  }

}
