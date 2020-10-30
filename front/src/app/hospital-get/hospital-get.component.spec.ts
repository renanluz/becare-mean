import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalGetComponent } from './hospital-get.component';

describe('HospitalGetComponent', () => {
  let component: HospitalGetComponent;
  let fixture: ComponentFixture<HospitalGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
