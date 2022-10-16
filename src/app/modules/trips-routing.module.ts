import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterTripComponent } from './components/filter-trip/filter-trip.component';
import { ResultsTripComponent } from './components/results-trip/results-trip.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'filter-trip',
      pathMatch: 'full',
    },
    {
      path: 'filter-trip',
      component: FilterTripComponent
    },
    {
      path: 'results-trip/:origin/:destination',
      component: ResultsTripComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class TripsRoutingModule {}