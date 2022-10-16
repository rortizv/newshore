import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-results-trip',
  templateUrl: './results-trip.component.html',
  styleUrls: ['./results-trip.component.css']
})
export class ResultsTripComponent implements OnInit {

  @Input() flights: Flight[] = [
    {
      "departureStation": "MDE",
      "arrivalStation": "BCN",
      "flightCarrier": "CO",
      "flightNumber": "8004",
      "price": 500
    }
    ,
    {
      "departureStation": "BOG",
      "arrivalStation": "MAD",
      "flightCarrier": "CO",
      "flightNumber": "8006",
      "price": 500
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
