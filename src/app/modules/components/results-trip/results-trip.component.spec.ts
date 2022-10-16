import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTripComponent } from './results-trip.component';

describe('ResultsTripComponent', () => {
  let component: ResultsTripComponent;
  let fixture: ComponentFixture<ResultsTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
