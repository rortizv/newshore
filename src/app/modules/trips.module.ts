import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { FilterTripComponent } from './components/filter-trip/filter-trip.component';
import { ResultsTripComponent } from './components/results-trip/results-trip.component';
import { ItemTripComponent } from './components/item-trip/item-trip.component';
import { TripsRoutingModule } from './trips-routing.module';



@NgModule({
  declarations: [
    FilterTripComponent,
    ResultsTripComponent,
    ItemTripComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    TripsRoutingModule
  ]
})
export class TripsModule { }
