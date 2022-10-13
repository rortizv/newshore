import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTripComponent } from './item-trip.component';

describe('ItemTripComponent', () => {
  let component: ItemTripComponent;
  let fixture: ComponentFixture<ItemTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
