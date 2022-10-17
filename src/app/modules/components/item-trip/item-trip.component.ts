import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-item-trip',
  templateUrl: './item-trip.component.html',
  styleUrls: ['./item-trip.component.css']
})
export class ItemTripComponent implements OnInit {

  @Input() resultOrigin: Flight[] = [];
  @Input() resultDestination: Flight[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.resultOrigin);
    console.log(this.resultDestination);
  }

}
